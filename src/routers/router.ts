import Home from "@/pages/Home.vue";
import routerAdmin from "@/routers/routerAdmin";
import routerSuperAdmin from "@/routers/routerSuperAdmin";
import {createRouter, createWebHistory} from "vue-router";
import {ShallowReactive, shallowReactive} from "vue";
import axios from "axios";
import {apiEndPoint} from "@/configs/apiEndPoint.ts";
import {toast} from "vue3-toastify";
import EditApplication from "@/components/EditApplication.vue";

export const routerState: ShallowReactive<{
    authenticationToken: string | null,
    isAdmin: boolean,
    isSuperAdmin: boolean,

    isLoading: boolean,
    isLoaded: boolean,
    isFailed: boolean,
    errorMessages?: string,
    routerResult?: any
}> = shallowReactive({
    authenticationToken: null,
    isAdmin: false,
    isSuperAdmin: false,

    isLoading: false,
    isLoaded: false,
    isFailed: false,
    errorMessages: undefined,
    routerResult: undefined
})

export const routerMutations = {
    setAuthenticationToken(token: string | null) {
        routerState.authenticationToken = token
    },
    setIsAdmin(isAdmin: boolean) {
        routerState.isAdmin = isAdmin
    },
    setIsSuperAdmin(isSuperAdmin: boolean) {
        routerState.isSuperAdmin = isSuperAdmin
    },
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/test',
          component: EditApplication
        },
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/Login.vue'),
            beforeEnter: async (_, __, next) => {
                if (!routerState.authenticationToken) {
                    await axios.post(apiEndPoint.refreshToken, {}, {withCredentials: true})
                    .then(res => {
                        routerMutations.setAuthenticationToken(res.data.accessToken)
                        next({name: 'admin-dashboard'})
                    })
                    .catch(() => {
                        next()
                    })
                } else next({name: 'admin-dashboard'})
            }
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('@/pages/Logout.vue'),
            beforeEnter: async (_, __, next) => {
                await axios.post(apiEndPoint.logout, {}, {withCredentials: true})
                .then(() => {
                    routerMutations.setAuthenticationToken(null)
                    next({name: 'home'})
                })
                .catch((err) => {
                    routerState.isFailed = true
                    routerState.errorMessages = err.response?.data?.message || err.message || 'SERVER ERROR'
                    next(false)
                })
            }
        },
        {
            path: '/registration/:nik/:email',
            name: 'regist-detail',
            component: () => import('@/pages/RegistrationDetails.vue'),
            beforeEnter: async (to, _, next) => {
                await axios.post(apiEndPoint.checkRegisterStatus, {nik: to.params.nik, email: to.params.email}, { withCredentials: true }).then(res => {
                    routerState.routerResult = res.data
                    next()
                }).catch(err => {
                    routerState.isFailed = true
                    if (err.response.status === 404)
                        routerState.errorMessages = err.response.data.message
                    else
                        routerState.errorMessages = err.message
                    next(false)
                })
            },
        },
        {
            path: '/registration/form',
            name: 'regist-form',
            component: () => import('@/pages/RegistrationForm.vue')
        },
        {
            path: '/registration/application/:nik/:email',
            name: 'application-letter',
            component: () => import('@/pages/ApplicationLetter.vue'),
            beforeEnter: async (to, _, next) => {
                await axios.post(apiEndPoint.checkRegisterStatus, {nik: to.params.nik, email: to.params.email}, { withCredentials: true }).then(res => {
                    routerState.routerResult = res.data
                    if (res.data[0].status_verifikasi != 'belum di verifikasi') next({ name: 'not-found' })
                    else next()
                }).catch(err => {
                    routerState.isFailed = true
                    if (err.response.status === 404)
                        routerState.errorMessages = err.response.data.message
                    else
                        routerState.errorMessages = err.message
                    next(false)
                })
            }
        },
        // ADMIN ROUTES
        {
            path: '/admin',
            component: () => import('@/components/layouts/AdminLayout.vue'),
            children: routerAdmin
        },
        // SUPER ADMIN ROUTES
        {
            path: '/super-admin',
            component: () => import('@/components/layouts/SuperAdminLayout.vue'),
            children: routerSuperAdmin
        },
        {
            path: '/error',
            name: 'error',
            component: () => import('@/pages/ErrorPage.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/pages/NotFound.vue')
        }
    ]
})

router.beforeEach((to, _, next) => {
    routerState.isFailed = false
    routerState.isLoaded = false
    routerState.isLoading = true

    if (to.path.includes('/admin') || to.path.includes('/super-admin')) {
        if (!routerState.authenticationToken) {
            axios.post(apiEndPoint.refreshToken, {}, {withCredentials: true})
                .then(res => {
                    routerMutations.setAuthenticationToken(res.data.accessToken)
                    next()
                })
                .catch(err => {
                    routerState.isFailed = true
                    routerState.errorMessages = err.response?.data.message || err.message || 'SERVER ERROR'
                    next({name: 'not-found'})
                })
        } else next();
    } else next()
})

router.afterEach((_, __, failure) => {
    routerState.isFailed = failure != undefined
    routerState.isLoaded = true
    routerState.isLoading = false

    if (!routerState.isFailed) toast.clearAll()
})

router.onError(() => {
    routerState.isFailed = true
    routerState.isLoaded = true
    routerState.isLoading = false
    router.push({name: 'error' })
})

export default router

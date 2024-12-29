import {RouteRecordRaw} from "vue-router";
import axios from "axios";
import {apiEndPoint} from "@/configs/apiEndPoint.ts";
import {routerState} from "@/routers/router.ts";

const router: RouteRecordRaw[] = [
    {
        path: '',
        name: 'admin-dashboard',
        component: () => import('@/pages/admin/Dashboard.vue'),
        beforeEnter: async (_, from, next) => {
            try {
                const [allMemberCount, needVerifyCount, registerCount] = await Promise.all([
                    axios.get(apiEndPoint.admin_see_allMemberCount, {withCredentials: true}),
                    axios.get(apiEndPoint.admin_see_needVerifyCount, {withCredentials: true}),
                    axios.get(apiEndPoint.admin_see_registerCount, {withCredentials: true})
                ]);

                routerState.routerResult = {
                    allMemberCount: allMemberCount.data,
                    needVerifyCount: needVerifyCount.data,
                    registerCount: registerCount.data
                };
                next();
            } catch (err: any) {
                routerState.isFailed = true;
                if (err.response?.status === 404)
                    routerState.errorMessages = err.response.data.message;
                else
                    routerState.errorMessages = err.message;
                next({ name: from.name || 'error' });
            }
        }
    },
    {
        path: 'recive',
        name: 'admin-recive',
        component: () => import('@/pages/admin/Recerving.vue'),
        beforeEnter: async (_, from, next) => {
            await axios.get(apiEndPoint.amdin_see_listRequestedVerify, { withCredentials: true }).then(res => {
                routerState.routerResult = res.data
                next()
            }).catch(err => {
                routerState.isFailed = true
                console.log(err)
                if (err.response.status === 404)
                    routerState.errorMessages = err.response.data.message
                else
                    routerState.errorMessages = err.message
                next({ name: from.name || 'error' });
            })
        }
    },
    {
        path: 'employees',
        name: 'admin-employees',
        component: () => import('@/pages/admin/Employees.vue'),
        beforeEnter: async (_, from, next) => {
            await axios.get(apiEndPoint.admin_see_listVerifiedMember, { withCredentials: true }).then(res => {
                routerState.routerResult = res.data
                next()
            }).catch(err => {
                routerState.isFailed = true
                console.log(err)
                if (err.response.status === 404)
                    routerState.errorMessages = err.response.data.message
                else
                    routerState.errorMessages = err.message
                next({ name: from.name || 'error' });
            })
        }
    },
    {
        path: 'registers',
        name: 'admin-registers',
        component: () => import('@/pages/admin/Registers.vue'),
        beforeEnter: async (_, from, next) => {
            await axios.get(apiEndPoint.amdin_see_listUnverifiedMeber + '?page=1&limit=10', { withCredentials: true }).then(res => {
                routerState.routerResult = res.data
                next()
            }).catch(err => {
                routerState.isFailed = true
                console.log(err)
                if (err.response.status === 404)
                    routerState.errorMessages = err.response.data.message
                else
                    routerState.errorMessages = err.message
                next({ name: from.name || 'error' });
            })
        }
    },
    {
        path: 'profile',
        name: 'admin-settings',
        component: () => import('@/pages/admin/Settings.vue'),
    },
]

export default router;
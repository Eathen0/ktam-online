import Home from "@/pages/Home.vue";
import routerAdmin from "@/routers/routerAdmin";
import routerSuperAdmin from "@/routers/routerSuperAdmin";
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         alias: '/home',
         name: 'home',
         component: Home,
      },
      {
         path: '/login',
         name: 'login',
         component: () => import('@/pages/Login.vue')
      },
      {
         path: '/registration',
         name: 'regist-detail',
         component: () => import('@/pages/RegistrationDetails.vue')
      },
      {
         path: '/registration/form',
         name: 'regist-form',
         component: () => import('@/pages/RegistrationForm.vue')
      },
      {
         path: '/registration/application',
         name: 'application-letter',
         component: () => import('@/pages/ApplicationLetter.vue')
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
      }
   ]
})
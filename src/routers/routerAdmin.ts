import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw[] = [
   {
      path: '',
      name: 'admin-dashboard',
      component: () => import('@/pages/admin/Dashboard.vue'),
   },
   {
      path: 'recive',
      name: 'admin-recive',
      component: () => import('@/pages/admin/Recerving.vue'),
   },
   {
      path: 'registrant',
      component: () => import('@/pages/admin/Registrant.vue'),
   },
   {
      path: 'profile',
      name: 'admin-settings',
      component: () => import('@/pages/admin/Settings.vue'),
   },
]

export default router;
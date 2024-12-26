import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw[] = [
   {
      path: '',
      component: () => import('@/pages/admin/Dashboard.vue'),
   },
   {
      path: 'registrant',
      component: () => import('@/pages/admin/Registrant.vue'),
   }
]

export default router;
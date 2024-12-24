import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw[] = [
   {
      path: '',
      component: () => import('@/pages/admin/Dashboard.vue'),
   },
   {
      path: 'recive',
      component: () => import('@/pages/admin/Recerving.vue'),
   }
]

export default router;
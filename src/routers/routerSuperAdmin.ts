import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw[] = [
   {
      path: 'edit-information',
      name: 'super-admin-edit-informations',
      component: () => import('@/pages/superAdmin/EditInformations.vue')
   }
]

export default router;
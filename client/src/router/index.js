import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  DashboardVue  from '../views/admin/DashboardVue.vue'
import AdminLayouts from '@/layouts/AdminLayouts.vue'
import { PRIVATE_ROUTS_VALUE, PUBLIC_ROUTS_VALUE} from '@/enums/index.js'
import AdminUsers from '@/views/admin/users/AdminUsers.vue'
import EditUser from '@/views/admin/users/EditUser.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PRIVATE_ROUTS_VALUE.dashboard,
      name: 'dasboard',
      component: DashboardVue,
      meta: { layout: AdminLayouts }
    },
    {
      path: PRIVATE_ROUTS_VALUE.users,
      name: 'users',
      component: AdminUsers,
      meta: { layout: AdminLayouts }
    },
    {
      path: PRIVATE_ROUTS_VALUE.editUsers+"/:id",
      name: 'editUser',
      component: EditUser,
      meta: { layout: AdminLayouts }
    },
    {
      path: PUBLIC_ROUTS_VALUE.home,
      name: 'home',
      component: HomeView,
    },
    {
      path: PUBLIC_ROUTS_VALUE.about,
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

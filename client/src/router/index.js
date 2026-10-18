import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  DashboardVue  from '../views/admin/DashboardVue.vue'
import AdminLayouts from '@/layouts/AdminLayouts.vue'
import {AUTH_ROUTS_VALUE, PRIVATE_ROUTS_VALUE, PUBLIC_ROUTS_VALUE} from '@/enums/index.js'
import AdminUsers from '@/views/admin/users/AdminUsers.vue'
import EditUser from '@/views/admin/users/EditUser.vue'
import CategoryFront from "@/views/CategoryFront.vue";
import CatalogFront from "@/views/CatalogFront.vue";
import ProductItemFront from "@/views/ProductItemFront.vue";
import CurtVue from "@/views/CurtVue.vue";
import RegistrationVue from "@/views/auth/RegistrationVue.vue";
import LoginVue from "@/views/auth/LoginVue.vue";
import IndexVue from '@/views/admin/categories/IndexVue.vue'
import EditVue from '@/views/admin/categories/EditVue.vue'


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
      path: PRIVATE_ROUTS_VALUE.categories,
      name: 'adminCategories',
      component: IndexVue,
      meta: { layout: AdminLayouts }
    },
    
    {
      path: PRIVATE_ROUTS_VALUE.editUsers+"/:id",
      name: 'editUser',
      component: EditUser,
      meta: { layout: AdminLayouts }
    },
    {
      path: PRIVATE_ROUTS_VALUE.categories+"/:id",
      name: 'editAdminCategory',
      component: EditVue,
      meta: { layout: AdminLayouts }
    },
    {
      path: PUBLIC_ROUTS_VALUE.home,
      name: 'home',
      component: HomeView,
    },
    {
      path: PUBLIC_ROUTS_VALUE.categories,
      name: 'categories',
      component: CategoryFront,
    },
    {
      path: PUBLIC_ROUTS_VALUE.catalog,
      name: 'catalog',
      component: CatalogFront,
    },
    {
      path: PUBLIC_ROUTS_VALUE.product+"/:id",
      name: 'product',
      component: ProductItemFront
    },
    {
      path: PUBLIC_ROUTS_VALUE.curt,
      name: 'curt',
      component: CurtVue
    },

    {
      path: PUBLIC_ROUTS_VALUE.about,
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: AUTH_ROUTS_VALUE.register,
      name: 'register',
      component: RegistrationVue
    },
    {
      path: AUTH_ROUTS_VALUE.login,
      name: 'login',
      component: LoginVue
    },
  ],
})

export default router

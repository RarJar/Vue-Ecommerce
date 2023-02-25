import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // Main
  {
    path: '/',
    component: () => import('../views/Main/HomeView.vue') 
  },
  {
    path: '/shop',
    component: () => import('../views/Main/ShopView.vue') 
  },

  // Account
  {
    path: '/profile',
    component: () => import('../views/Account/ProfileView.vue') 
  },
  {
    path: '/profileInfo',
    component: () => import('../views/Account/ProfileInfoView.vue') 
  },
  {
    path: '/manageAddress',
    component: () => import('../views/Account/ManageAddressView.vue')
  },
  {
    path: '/changePassword',
    component: () => import('../views/Account/ChangePasswordView.vue')
  },

  // Auth
  {
    path: '/login',
    component: () => import('../views/Auth/LoginView.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Auth/RegisterView.vue')
  },

  // Product
  {
    path: '/productDetails',
    component: () => import('../views/Product/ProductDetailsView.vue')
  },
  {
    path: '/productWishList',
    component: () => import('../views/Product/ProductWishListView.vue')
  },
  
  // Order
  {
    path: '/cart',
    component: () => import('../views/Order/CartView.vue')
  },
  {
    path: '/checkout',
    component: () => import('../views/Order/CheckOutView.vue')
  },
  {
    path: '/orderComplete',
    component: () => import('../views/Order/OrderCompleteView.vue')
  },

  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/Main/NotFoundView.vue')
  }  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

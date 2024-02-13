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
    component: () => import('../views/Account/ProfileView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
          next('/login');
      }else{
          next();
      }
    }
  },
  {
    path: '/profileInfo',
    component: () => import('../views/Account/ProfileInfoView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
          next('/login');
      }else{
          next();
      }
    }
  },
  {
    path: '/manageAddress',
    component: () => import('../views/Account/ManageAddressView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
          next('/login');
      }else{
          next();
      }
    }
  },
  {
    path: '/changePassword',
    component: () => import('../views/Account/ChangePasswordView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
          next('/login');
      }else{
          next();
      }
    }
  },

  // Auth
  {
    path: '/login',
    component: () => import('../views/Auth/LoginView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
        next();
      }else{
        next('/profile');
      }
    }
  },
  {
    path: '/register',
    component: () => import('../views/Auth/RegisterView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
        next();
      }else{
        next('/profile');
      }
    }
  },

  // Product
  {
    path: '/productDetails/:productToken',
    component: () => import('../views/Product/ProductDetailsView.vue')
  },
  {
    path: '/favorite',
    component: () => import('../views/Product/ProductWishListView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
          next('/login');
      }else{
          next();
      }
    }
  },
  
  // Order
  {
    path: '/cart',
    component: () => import('../views/Order/CartView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
          next('/login');
      }else{
          next();
      }
    }
  },
  {
    path: '/checkout',
    component: () => import('../views/Order/CheckOutView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
          next('/login');
      }else{
          next();
      }
    }
  },
  {
    path: '/orderComplete',
    component: () => import('../views/Order/OrderCompleteView.vue'),
    beforeEnter: (to,from,next) => {
      if (localStorage.getItem('authToken') == "") {
          next('/login');
      }else{
          next();
      }
    }
  },

  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/Common/NotFoundView.vue')
  } 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/necklaces',
    name: 'NecklaceView',
    component: () => import('../views/NecklaceView.vue')
  },
  {
    path: '/bracelets',
    name: 'BraceletView',
    component: () => import('../views/BraceletView.vue')
  },
  {
    path: '/earrings',
    name: 'EarringsView',
    component: () => import('../views/EarringsView.vue')
  },
  {
    path: '/rings',
    name: 'RingsView',
    component: () => import('../views/RingsView.vue')
  },
  {
    path: '/set',
    name: 'SetView',
    component: () => import('../views/SetView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/cart',
    name: 'CartView',
    component: () => import('../views/CartView.vue')
  },
  {
    path: "/checkout",
  name: "checkoutview",
  component: () => import("../views/CheckOutView.vue"),
  props: true,
},
  {
    path: '/single/:id',
    name: 'SingleProduct',
    component: () => import('../views/SingleProduct.vue'),
    props: true
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    props: true
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

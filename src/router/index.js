import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Cart from '../views/CartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Product List',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Cart from '../views/CartView.vue'
import Fav from '../views/FavView.vue'

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
  {
    path: '/fav',
    name: 'Fav',
    component: Fav
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

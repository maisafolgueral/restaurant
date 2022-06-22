import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartRestaurant from '@/components/CartRestaurant.vue'
import AddToCart from '@/components/AddToCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'CartRestaurant',
    component: CartRestaurant
  },
  {
    path: '/addToCart/:id',
    name: 'AddToCart',
    component: AddToCart,
    props: true
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

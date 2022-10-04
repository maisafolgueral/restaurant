import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartRestaurant from '@/components/CartRestaurant.vue'
import AddToCart from '@/components/AddToCart.vue'
import PaymentView from '../views/PaymentView.vue'

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
    path: '/payment',
    name: 'PaymentView',
    component: PaymentView
  },
  {
    path: '/addToCart/:id',
    name: 'AddToCart',
    component: AddToCart,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Films',
    component: function () {
      return import(/* webpackChunkName: "Home" */ '../views/Films.vue')
    }
  },
  {
    path: '/booking/:id',
    name: 'Booking',
    component: function () {
      return import(/* webpackChunkName: "Booking" */ '../views/Booking.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

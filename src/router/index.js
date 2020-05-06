import Vue from 'vue'
import VueRouter from 'vue-router'

import Routes from '../routes/router_routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Routes
})

export default router

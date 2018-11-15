import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./views/Dashboard/index.vue')
    },
    {
      path: '/vue-el-table',
      name: 'VueElTable',
      component: () => import('./components/VueElTable/index.vue')
    },
    {
      path: '/vue-el-tab',
      name: 'VueElTab',
      component: () => import('./components/VueElTab/index.vue')
    }
  ]
})

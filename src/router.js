import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ThreadShow from '@/components/ThreadShow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/thread/:id',
      name: 'ThreadDetail',
      props: true,
      component: ThreadShow
    }
  ]
})

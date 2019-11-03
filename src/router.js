import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ThreadShow from '@/views/ThreadShow.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      props: route => ({
        a: 1,
        b: 2
      }),
      component: () => import(/* webpackChunkName: "about" */ './views/About.js')
    },
    {
      path: '/thread/:id',
      name: 'ThreadDetail',
      props: true,
      component: ThreadShow
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

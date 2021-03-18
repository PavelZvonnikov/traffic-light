import Vue from 'vue'
import VueRouter from 'vue-router'

import Color from './components/Color/temp.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: "red",
      path: '/1',
      component: Color,
      props: true
    },
    {
      name: "yellow",
      path: '/2',
      component: Color,
      props: true,
    },
    {
      name: "green",
      path: '/3',
      component: Color,
      props: true
    },
    {
      path: '/*',
      redirect: '/1'
    }
  ]
})


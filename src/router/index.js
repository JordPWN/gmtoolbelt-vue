import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dice from '@/components/layout/tools/Dice'
import Tracker from '@/components/layout/tools/Tracker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dice',
      name: 'Dice',
      component: Dice
    },
    {
      path: '/tracker',
      name: 'Tracker',
      component: Tracker
    }
  ]
})

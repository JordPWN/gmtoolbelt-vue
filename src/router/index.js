import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dice from '@/components/layout/tools/Dice'
import Tracker from '@/components/layout/tools/Tracker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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

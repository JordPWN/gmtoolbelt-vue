// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Navbar from './components/layout/Navbar'
import Tray from './components/layout/Tray'
import router from './router'
import Buefy from 'buefy'
import { store } from '../vuex/store'
import 'buefy/lib/buefy.css'

Vue.use(Vuex)
Vue.use(Buefy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, Navbar, Tray },
  created () {
    this.$on('loadTray', function (event) {
      console.log(event, 'received!')
    })
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    activeTray: ''
  },
  mutations: {
    activeTray (state, tray) {
      state.activeTray = tray
      console.log('state updated!')
    }
  }

})

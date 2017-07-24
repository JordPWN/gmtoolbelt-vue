import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// // the root, initial state object
// const state = {
//   activeTray: {}
// }
//
// // define the possible mutations that can be applied to our state
// const mutations = {
//   SET_ACTIVE_TRAY (state, tray) {
//     state.activeTray = tray
//   }
// }
//
// // create the Vuex instance by combining the state and mutations objects
// // then export the Vuex store for use by our components
// export default new Vuex.Store({
//   state,
//   mutations
// })
export const store = new Vuex.Store({
  state: {
    activeTray: {}
  },
  mutations: {
    activeTray (state, tray) {
      state.activeTray = tray
      console.log('state updated!')
    }
  }
  // actions: {
  //   activeTray (state, tray) {
  //
  //   }
  // }
})

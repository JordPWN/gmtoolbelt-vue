import Vue from 'vue'
import Vuex from 'vuex'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'

Vue.use(Vuex, lodash, VueLodash)

export const store = new Vuex.Store({
  state: {
    activeTray: '',
    characters: [
      {
        name: 'Jordan',
        initiative: 7
      },
      {
        name: 'Mouse',
        initiative: 1
      },
      {
        name: 'Rosey',
        initiative: 2
      }
    ]
  },
  mutations: {
    addCharacter (state) {
      const newChar = {
        name: 'Click to edit',
        initiative: 0
      }
      state.characters.push(newChar)
    },
    activeTray (state, tray) {
      state.activeTray = tray
      console.log('state updated!')
    },
    sortCharacters (state) {
      console.log('sortCharacters')
      state.characters = _.sortBy(state.characters, 'initiative').reverse()
    },
    updateCharacter (state, character) {
      Object.assign(state.character, character)
    }
  }

})

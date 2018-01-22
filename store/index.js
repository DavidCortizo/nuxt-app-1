import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      images: ''
    },
    mutations: {
      add (state, payload) {
        state.images = payload
      }
    }
  })
}

export default createStore

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 as number |null,
    name: null as string | null
  },
  getters: {
    getName(state):string {
      if (state.name){ 
        return state.name
      }
      return ''
    },
    greet(state, getters) {
      return `My name is ${getters.getName.toUpperCase()}`
    }
  },
  mutations: {
    setName(state, payload) {
      state.name = payload
    },
    increment(state) {
      state.count++
    }
  },
  actions: {
    asyncSetName(ctx, payload) {
      ctx.commit('setName', {name: payload})
      console.log(ctx.state.name)
    }

  }
})
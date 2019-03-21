import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
  mutations: {
    changeCity (state, city) {
      console.log("mutations" + city)
      state.city = city
    }
  },
  // actions: {
  //   changeCity (ctx, city) {
  //     console.log("action" + city)
  //     ctx.commit('changeCity', city)

  //   }

  // }
})

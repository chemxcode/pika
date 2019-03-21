import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
  
} catch (error) {}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity (state, city) {
      console.log("mutations" + city)
      state.city = city
      try {
        localStorage.city = city
      } catch (error) {}
      
    }
  },
  // actions: {
  //   changeCity (ctx, city) {
  //     console.log("action" + city)
  //     ctx.commit('changeCity', city)

  //   }

  // }
})

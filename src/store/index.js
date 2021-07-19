import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    generateRandomName    : () => {
      return new Promise((resolve, reject) => {
      axios.get('https://randomuser.me/api/')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response.data)
        })
      })
    }
  },
  modules: {
  }
})

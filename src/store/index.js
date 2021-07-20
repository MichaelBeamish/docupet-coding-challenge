import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    petTypes   : [
      'cat',
      'dog',
      'ferret',
      'parrot',
      'fish',
      'spider',
      'mouse',
      'turtle',
      'rabbit',
      'snake',
      'snail',
      'raccoon',
      'pig',
      'horse',
      'hedgehog',
      'lizard'
    ],
    petsList: [],
    showModal: false,
    petToEdit: {}
  },
  getters: {
    getPetTypes: (state) => {
        return state.petTypes
    },
    getPetList: (state) => {
        return state.petsList
    },
    getModalStatus: (state) => {
        return state.showModal
    },
    getPetToEdit: (state) => {
        return state.petToEdit
    }
  },
  mutations: {
    setPetsList: (state, payload) => {
      state.petsList = payload
    },
    setModalStatus: (state, payload) => {
      state.showModal = payload
    },
    setPetToEdit: (state, payload) => {
      state.petToEdit = payload
    },
  },
  actions: {
    showModal: (context, modalData) => {
      context.commit('setModalStatus', modalData.show)
      if (modalData.petToEdit) {
        context.commit('setPetToEdit', modalData.petToEdit)
      } else {
        context.commit('setPetToEdit', {})
      }
    },
    generateRandomPet    : (context) => {
      return new Promise((resolve, reject) => {
      axios.get('https://randomuser.me/api/')
        .then(response => {
          let r = response.data.results[0]
          let randomPet = {
            name:   r.name.first,
            gender: r.gender,
            age:    r.dob.age,
            type:   context.state.petTypes[Math.floor(Math.random() * context.state.petTypes.length)]
          }
          resolve(randomPet)
        })
        .catch(error => {
          reject(error.response.data)
        })
      })
    },
    loadPetsFromLocalStorage (context) {
      let savedLocalStorage = JSON.parse(localStorage.petsList)
      context.commit('setPetsList', savedLocalStorage)
    },
    removePetFromLocalStorage (context, petID) {
      // Pull latest pet list from local storage.
      let petsListToEdit = JSON.parse(localStorage.getItem('petsList'))
      
      // Find pet and remove it.
      if (petsListToEdit && Array.isArray(petsListToEdit)) {
        petsListToEdit = petsListToEdit.filter(pet => pet.id !== petID)
        localStorage.setItem('petsList', JSON.stringify(petsListToEdit))
      }
      
      // Update the store with the latest data.
      context.dispatch('loadPetsFromLocalStorage')
    },
    editOrAddPetInLocalStorage (context, pet) {
      // Pull latest pet list from local storage.
      let petsListToEdit = JSON.parse(localStorage.getItem('petsList'))
      
      // Find index of pet to edit...
      if (petsListToEdit && Array.isArray(petsListToEdit)) {
        
        // Check if pet exists...
        let index
        if (pet.id) {
          for (let i = 0; i < petsListToEdit.length; i++) {
            if (petsListToEdit[i].id === pet.id) {
              index = i
            }
          } 
        }
        
        // If pet exists we edit the existing pet.
        if (index !== undefined) {
          petsListToEdit[index] = pet
        } else {
          // Since no pet with the id exists we need to create a new one.
          // Add a unique ID to the pet prior to adding to local storage.
          let cryptoObj = window.crypto || window.msCrypto
          let uniqueID = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ cryptoObj.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          )
          pet.id = uniqueID
          
          // Add to array
          petsListToEdit.unshift(pet)
        }
        
        // Update locale storage.
        localStorage.setItem('petsList', JSON.stringify(petsListToEdit))
      } else {
        // Since no array exists we create one and add the single pet.
        localStorage.setItem('petsList', JSON.stringify([pet]))
      }      
      
      // Update the store with the latest data.
      context.dispatch('loadPetsFromLocalStorage')
    }
  },
  modules: {
  }
})

<template>
  <div id="pet-page">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>Pet Page</h2>
    <button class="btn btn-danger" @click="generateRandomName">Generate Random Name</button>
    <PetDetails :details="{name: 'Fluffy', age: 8, species: 'Dog'}"/>
    <PetDetails :details="{name: 'Pumpkin', age: 2, species: 'Komodo Dragon'}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PetDetails from '@/components/PetDetails.vue'

export default {
  name: 'Home',
  components: {
    PetDetails
  },
  methods: {
    generateRandomName () {
      this.$store.dispatch('generateRandomName').then(response => {
        console.log('***RESPONSE', response)
      })
    }
  }
}
</script>

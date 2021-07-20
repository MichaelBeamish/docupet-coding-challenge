<template>
  <div id="pet-page">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <h2>Pet Page</h2>
    
    <PetCreatorModal :details="{name: 'Pumpkin', age: 2, species: 'Komodo Dragon'}"/>
    
    <div v-for="(pet, i) in petsList" :key="i">
      <PetDetails :details="pet"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PetDetails from '@/components/PetDetails.vue'
import PetCreatorModal from '@/components/PetCreatorModal.vue'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    PetDetails,
    PetCreatorModal
  },
  created () {
    return this.$store.dispatch('loadPetsFromLocalStorage')
  },
  computed: {
    petsList () {
      return this.$store.getters.getPetList
    }
  },
}
</script>

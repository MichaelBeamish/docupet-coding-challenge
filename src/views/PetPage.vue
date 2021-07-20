<template>
  <div id="pet-page" class="container">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <h4>Pet Page</h4>
    <p>This is where all of your virtual pets live!</p>
    
    <PetCreatorModal/>
    
    <div class="d-flex justify-content-center flex-wrap">
      <div v-for="(pet, i) in petsList" :key="i" class="m-3">
        <div style="width: 20em;">
          <PetDetails :details="pet"/>
        </div>
      </div>      
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

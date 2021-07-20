<template>
  <div class="pet-details">
    <PetSprite v-if="details.type" :petType="details.type"/>
    Name: {{details.name}}
    Age: {{details.age}}
    Gender: {{details.gender}}
    Type: {{details.type}}
    <b-button variant="danger" @click="removePet">X</b-button>
    <b-button variant="primary" @click="editPet">Edit</b-button>
  </div>
</template>

<script>
import PetSprite from '@/components/PetSprite.vue'

export default {
  name: 'PetDetails',
  props: {
    details: Object
  },
  components: {
    PetSprite
  },
  methods: {
    removePet () {
      this.$store.dispatch('removePetFromLocalStorage', this.details.id)
    },
    editPet () {
      this.$store.dispatch('showModal', {show: true, petToEdit: this.details})
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="pet-details text-center">
    <b-card
      :title="details.name + ' the ' + capitalizeFirst(details.type)"
      tag="article"
      style="max-width: 20rem; box-shadow: 5px 10px 18px #888888;"
      class="mb-2"
    >
    <PetSprite v-if="details.type" :petType="details.type"/>
    <b-card-text>
      <p>Age: {{details.age}}</p>
      <p>Gender: {{details.gender}}</p>
    </b-card-text>

      <b-button variant="danger" style="margin-left: 0.5em; margin-right: 0.5em;" @click="removePet">Remove</b-button>
      <b-button variant="primary" @click="editPet">Edit</b-button>
    </b-card>
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
    capitalizeFirst (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
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

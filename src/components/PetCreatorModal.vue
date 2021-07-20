<template>
  <div class="pet-creator">
    <div>
      <b-button id="show-btn" variant="primary" @click="showModal">Create A New Pet</b-button>

      <b-modal ref="creator-modal" hide-header hide-footer>
        <div class="d-block">
          <h3>{{Object.keys(petToEdit).length ? 'Edit Your Pet' : 'Create A New Pet'}}</h3>
          <b-button v-if="!Object.keys(petToEdit).length" variant="primary" @click="generateRandomPet">Generate Random Data</b-button>
          
          <PetSprite v-if="pet.type" :petType="pet.type"/>
          
          <label class="d-block mt-3">Name:</label>
          <b-form-input v-model="pet.name"/>
          <label class="d-block mt-3">Age:</label>
          <b-form-input v-model="pet.age"/>
          <label class="d-block mt-3">Gender:</label>
          <b-form-select class="w-100" v-model="pet.gender" :options="genders"/>
          <label class="d-block mt-3">Type:</label>
          <b-form-select class="w-100" v-model="pet.type" :options="petTypes"/>
        </div>
        
        <div class="mt-4">
          <b-button variant="success" style="margin-right: 1em;" @click="addOrEditPet" :disabled="pendingInfo">{{Object.keys(petToEdit).length ? 'Edit Pet' : 'Add Pet'}}</b-button>
          <b-button variant="danger" @click="hideModal">Cancel</b-button>
        </div>
      </b-modal>
    </div>
    
  </div>
</template>

<script>
import PetSprite from '@/components/PetSprite.vue'

export default {
  name: 'PetCreatorModal',
  components: {
    PetSprite
  },
  data () {
    return {
      pet: {
        name: '',
        gender: null,
        age: null,
        type: null
      },
      genders: ['male', 'female', 'other']
    }
  },
  computed: {
    showModalBool () {
      return this.$store.getters.getModalStatus
    },
    petToEdit () {
      return this.$store.getters.getPetToEdit
    },
    petTypes () {
      return this.$store.getters.getPetTypes
    },
    pendingInfo () {
      if (!this.pet.name || !this.pet.gender || !this.pet.age || !this.pet.type) {
        return true
      }
      return false
    }
  },
  methods: {
      showModal() {
        if (this.petToEdit) {
          this.pet = JSON.parse(JSON.stringify(this.petToEdit))
        }
        this.$refs['creator-modal'].show()
      },
      hideModal() {
        this.clearPetData()
        this.$store.dispatch('showModal', {show: false})
        this.$refs['creator-modal'].hide()
      },
      clearPetData () {
        this.pet = {
          name: '',
          gender: null,
          age: null,
          type: null
        }
      },
      generateRandomPet () {
        this.$store.dispatch('generateRandomPet').then(randomPet => {
          this.pet = randomPet
        }).catch(err => {
          console.log('Error:', err)
        })
      },
      addOrEditPet () {
        this.$store.dispatch('editOrAddPetInLocalStorage', this.pet)
        this.hideModal()
      }
  },
  watch: {
    showModalBool (val) {
      if (val) {
        this.showModal()
      } else {
        this.hideModal()
      }
    }
  }
}
</script>

<style scoped>

</style>

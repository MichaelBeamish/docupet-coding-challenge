<template>
  <div class="pet-details">
    Pet Details
    Name: {{details.name}}
    Age: {{details.age}}
    Species: {{details.species}}
  </div>
</template>

<script>
export default {
  name: 'PetDetails',
  props: {
    details: Object
  }
}
</script>

<style scoped>

</style>

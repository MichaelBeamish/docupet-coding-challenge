<template>
  <div class="home">
    <div class="text-center">
      <img src="../assets/img/pets_background.png" alt="Pets Background">
    </div>
    <div class="container mt-2">
      <h4>Welcome to the pet creator! The place you can come to create virtual pets.</h4>
      <h4>To begin please proceed to the <router-link to="/pet-page">pet page</router-link>.</h4>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

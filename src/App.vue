<template>
  <div id="app">
    <Navigation class="mb-4"/>
    <router-view/>
    <small class="footer">Michael Beamish - 2021</small>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>

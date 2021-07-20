<template>
  <div id="navigation">
    <b-navbar toggleable type="dark" variant="dark" class="px-4">
      <b-navbar-brand>
        <router-link class="text-white" style="text-decoration: none;" to="/">Virtual Pets</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/pet-page">Pet Page</router-link>
          </b-nav-item>
          <b-nav-item>
              <router-link to="/contact">Contact</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>

<template>
  <header>
    <div>Wasted App</div>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
}
</script>

<style scoped>

</style>
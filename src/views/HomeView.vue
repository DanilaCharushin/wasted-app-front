<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span>{{ token }}</span>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    token: '',
  }),
}
</script>

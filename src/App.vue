<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}


.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.header {
  flex: 0 0 auto;
}

.content {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 100%;
}

</style>

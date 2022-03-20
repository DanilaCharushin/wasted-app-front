<template>
  <div class="main-header">
    <div class="welcome-header">
      <div class="app-name">Wasted App</div>
      <div class="btn-container q-pa-md q-gutter-sm">
        <button v-if="isLoggedIn" class="btn waves-effect blue darken-4" @click.prevent="toMain">На главную</button>
        <button v-if="!isLoggedIn" class="btn waves-effect blue darken-4" @click.prevent="toLogin">Войти</button>
        <button v-else class="btn waves-effect blue darken-4" @click.prevent="logout">Выйти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
          .then(() => {
            this.$emit('update')
            this.$router.push('/login?message=logout')
          })
    },
    async toLogin() {
      if (this.$route.name !== 'login')
        await this.$router.push("/login");
    },
    async toMain() {
      if (this.$route.name !== 'home')
        await this.$router.push("/");
    },
  }
}
</script>

<style scoped>

.btn-container {
  min-height: 0;
  margin: 0 15px;
}

.app-name {
  margin: 0 10px;
  justify-items: center;
  text-align: center;
  font-size: 40px;
  padding-left: 50px;
}

.btn {
  margin: 0 10px;
}

.main-header {
  background-image: url("~@/assets/fon2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px 0;
}

.welcome-header {
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: calc(12px + 4 * (100vw / 1440));
  margin-bottom: 10px;
}

@media (max-width: 480px) {

  .welcome-header {
    font-size: small;
  }
}

@media (max-width: 1200px) {
  .btn-container {
    display: flex;
    flex-direction: column;
  }

}


</style>
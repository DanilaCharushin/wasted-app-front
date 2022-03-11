<template>
  <div class="container">
    <div class="auth-card">
      <h5>Вход</h5>
      <div class="input-field">
        <i class="material-icons prefix">account_circle</i>
        <input id="icon_prefix" type="text" v-model="email">
        <label for="icon_prefix">Электронная почта</label>
      </div>
      <div class="input-field">
        <i class="material-icons prefix">vpn_key</i>
        <input id="vpn_key" type="password" v-model="password">
        <label for="vpn_key">Пароль</label>
      </div>
      <br>
      <button class="btn waves-effect waves-light auth-submit" @click="login">Войти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      const resp = await this.$store.dispatch('login', formData)
      console.log(resp)

    },
  },
}
</script>

<style scoped>
.auth-card {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}

.input-field {
  width: 400px;
  align-self: center;
}

h5 {
  margin: 20px auto;
}

button {
  max-width: 150px;
  margin: auto;
}
</style>
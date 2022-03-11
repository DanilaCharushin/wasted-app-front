<template>
  <div class="container">
    <div class="auth-card">
      <h5>Регистрация</h5>
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
      <button class="btn waves-effect waves-light auth-submit" @click="signup">Отправить</button>
    </div>
    <div class="error" v-if="error">
      {{ error }}
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
      error: '',
    }
  },
  methods: {
    async signup() {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      try {
        await this.$store.dispatch('signup', formData)
        await this.$router.push("/")
      } catch (e) {
        console.log(e.response)
        this.error = e.response.status === 401 ? "Пользователь не найден" : e.message
      }

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
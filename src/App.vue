<template>
  <div id="app" class="wrapper">
    <Header :key="key" @update="update" class="header"/>
    <router-view @update="update" class="content" :categoryGroups="categoryGroups" :categories="categories"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Header},
  data: () => ({
    key: 0,
    categoryGroups: [],
    categories: [],
  }),
  methods: {
    async update() {
      this.key += 1
      await this.getCategories()
    },
    async getCategories() {
      this.categoryGroups = await this.$store.dispatch("allCategoryGroups")
      this.categories = await this.$store.dispatch("allCategories")
      console.log(this.categoryGroups)
      console.log(this.categories)
    }
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, async function (err) {
      return await new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout")
        }
        throw err;
      });
    });
  },
  async beforeMount() {
    await this.getCategories()
  }
}
</script>


<style>

@import '~materialize-css/dist/css/materialize.min.css';

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
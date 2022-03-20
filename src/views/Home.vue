<template>
  <div class="container">
    <div class="q-pa-md">
      <h5>Текущая группа категорий: </h5>
      <select style="display: block" v-model="selectedCategoryId" @change.prevent="getCategoriesById">
        <option v-for="category in categoryGroups" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="q-gutter-md" v-if="selectedCategoryId">
      <div class="new-category" style="max-width: 600px">
        <q-input type="text" placeholder="Введите название" v-model="newCategoryName">
          <template v-slot:after>
            <button class="btn waves-effect green lighten-1" @click.prevent="createNewCategory">Добавить категорию
            </button>
          </template>
        </q-input>
      </div>
      <HomeList :currentCategories="currentCategories"/>
    </div>
  </div>
</template>

<script>

import HomeList from "@/components/HomeList";

export default {
  name: "Home",
  components: {HomeList},
  props: ['categoryGroups', 'categories'],
  data: () => ({
    selectedCategoryId: 1,
    newCategoryName: null,
    currentCategories: [],
  }),
  methods: {
    getCategoriesById() {
      this.currentCategories = []
      for (let category of this.categories) {
        if (category.category_group.id === this.selectedCategoryId) {
          this.currentCategories.push(category)
        }
      }
      console.log(this.currentCategories)
    },
    async createNewCategory() {
      const data = {
        category_group_id: this.selectedCategoryId,
        name: this.newCategoryName,
      }
      try {
        const resp = await this.$store.dispatch("createCategory", data)
        this.currentCategories.push(resp)
        this.$emit('update')
        this.$message("Категория успешно создана!")
      } catch (e) {
        this.$message("Произошла ошибка!")
      }
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
  },
  async mounted() {
    if (!this.isLoggedIn) {
      await this.$router.push('/login')
    }
    this.getCategoriesById()
  },
  watch: {
    categories() {
      this.getCategoriesById()
    }
  }
}
</script>

<style scoped>
.new-category {
  margin: 40px auto;
}
</style>
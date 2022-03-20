<template>
  <div class="container">
    <Loader v-if="loading"/>
    <div v-else>
      <h3>Категория "{{ nameCategory }}"</h3>
      <div>
        <div class="new-category q-pa-md">
          <h5>Добавить трату</h5>
          <div class="q-gutter-sm row">
            <q-input type="text" placeholder="Введите название" v-model="newWasteName">
            </q-input>
            <q-input type="text" placeholder="Введите сумму" v-model="newAmount">
            </q-input>
            <button class="btn waves-effect green lighten-1" @click.prevent="createNewWaste">Добавить трату
            </button>
          </div>
        </div>
      </div>
      <q-table
          :data="allWastes"
          :columns="columns"
          row-key="name"
          no-data-label="I didn't find anything for you"
          selection="single"
          :selected.sync="selected"
      />
      <div>
        <button class="btn waves-effect red lighten-1" @click.prevent="deleteCategory">Удалить категорию
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateCategory",
  props: ['id'],
  data: () => ({
    loading: true,
    selectedCategoryId: null,
    newWasteName: '',
    newAmount: null,
    allWastes: [],
    selected: [],
    wastes: [],
    columns: [
      {
        name: 'name',
        label: 'Трата',
        align: 'left',
        field: val => val.name,
        required: true,
      },
      {name: 'amount', align: 'center', label: 'Сумма', field: val => val.amount, sortable: true},
      {name: 'created_at', align: 'center', label: 'Дата', field: val => val.created_at}
    ]
  }),
  methods: {
    async createNewWaste() {
      const data = {
        category_id: this.id,
        name: this.newWasteName,
        amount: this.newAmount
      }
      try {
        const resp = await this.$store.dispatch("createWaste", data)
        console.log(resp)
        this.allWastes.push(resp)
        this.$message("Трата успешно записана!")
      } catch (e) {
        this.$message("Произошла ошибка!")
      }
    },
    async deleteCategory() {
      try {
        for (let waste of this.allWastes) {
          await this.$store.dispatch("deleteWaste", waste.id)
        }
        await this.$store.dispatch("deleteCategory", this.id)
        this.$message("Категория успешно удалена!")
        this.$emit('update')
        await this.$router.push('/')
      } catch (e) {
        this.$message("Произошла ошибка!")
        console.log(e)
      }
    }
  },
  async mounted() {
    this.nameCategory = this.$store.getters.categories.filter(value => value.id == this.id)[0].name
    let resp = await this.$store.dispatch('allWastes')
    this.allWastes = resp.filter(value => value.category.id == this.id)
    this.loading = false
  },
}
</script>

<style scoped>

</style>
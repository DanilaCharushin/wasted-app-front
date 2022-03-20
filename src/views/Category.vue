<template>
  <div class="container">
    <Loader v-if="loading"/>
    <div v-else>
      <h3>Категория {{ nameCategory }}</h3>
      <div class="center container">
        <h5>Добавление</h5>
        <div class="q-gutter-sm row">
          <q-input type="text" placeholder="Введите название" v-model="newWasteName"/>
          <q-input type="text" placeholder="Введите сумму" v-model="newAmount"/>
          <button class="btn waves-effect green lighten-1" @click.prevent="createNewWaste">Добавить трату
          </button>
        </div>
      </div>
      <div v-if="allWastes.length" class="center container">
        <h5>Удаление</h5>
        <div class="">
          <q-input type="text" placeholder="Введите название" v-model="deletedName">
            <template v-slot:append>
              <button class="btn waves-effect red lighten-1" @click.prevent="deleteWaste">Удалить трату
              </button>
            </template>
          </q-input>
        </div>
      </div>
      <q-table
          v-if="allWastes.length"
          :data="allWastes"
          :columns="columns"
          dense
          row-key="name"
          no-data-label="I didn't find anything for you"
          selection="single"
          :selected.sync="selected"
      />
      <h5 class="center" v-else>Траты в данной категории отсутствуют</h5>
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
  props: ['id', 'categories'],
  data: () => ({
    loading: true,
    selectedCategoryId: null,
    newWasteName: '',
    deletedName: '',
    nameCategory: '',
    newAmount: null,
    allWastes: [],
    selected: [],
    wastes: [],
    columns: [
      {
        name: 'name',
        label: 'Трата',
        align: 'left',
        field: 'name',
        required: true,
      },
      {name: 'amount', align: 'center', label: 'Сумма', field: 'amount', sortable: true},
      {
        name: 'created_at',
        align: 'center',
        label: 'Дата',
        field: 'created_at',
        format: value => new Date(value).toUTCString()
      }
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
        this.newWasteName = ''
        this.newAmount = null
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
    },
    async deleteWaste() {
      try {
        const deletedId = this.allWastes.find(value => value.name === this.deletedName).id
        await this.$store.dispatch("deleteWaste", deletedId)
        await this.getAllWastes()
        this.$message("Категория успешно удалена!")
        this.deletedName = ''
      } catch (e) {
        this.$message("Произошла ошибка!")
        console.log(e)
      }
    },
    async getAllWastes() {
      let resp = await this.$store.dispatch('allWastes')
      this.allWastes = resp.filter(value => value.category.id == this.id)
    }
  },
  async mounted() {
    try {
      this.nameCategory = '"' + this.categories.filter(value => value.id == this.id)[0].name + '"'
    } catch (e) {
      console.log(e)
      this.nameCategory = ''
    }
    await this.getAllWastes()
    this.loading = false
  },
}
</script>

<style scoped>

</style>
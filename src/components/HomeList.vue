<template>

  <div v-if="currentCategories.length">
    <h5>Категорий из данной группы</h5>
    <div class="list">
      <router-link class="list-item" v-for="category in currentCategories" :key="category.id"
                   :to="`/category/${category.id}`">
        {{ category.name }}
      </router-link>
    </div>
  </div>
  <div v-else><h5>Категории в данной группе отсутствуют</h5></div>
</template>

<script>
export default {
  name: 'HomeList',
  data: () => ({
    loading: true,
    categoryGroups: [],
    categories: [],
    selectedCategoryId: null,
    newCategoryName: '',
  }),
  props: ['currentCategories'],
}
</script>


<style>
.list {
  margin-top: 10px;
}

.list-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin: -1px 150px;
  background-color: #fff;
  border: 1px solid #ddd;
  text-decoration: none;
  max-width: 250px;
  color: #555;
}

.list-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.list-item:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
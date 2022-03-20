<template>
  <footer class="footer">
    <span class="text">Данный проект является макетом. Для дальнейшего использования необходимы доработки!</span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>


footer {
  background-image: url(~@/assets/footer.png);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  padding-top: 4rem;
  justify-content: center;
  min-height: 131px;
}

.text {
  margin: 0 auto;
  width: auto;
  color: white;
  font-size: large;
}

</style>
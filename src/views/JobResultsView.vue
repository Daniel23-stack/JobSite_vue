<script>
export default {
  name: 'JobResultsView',
  methods:{
    goToHome(){
      this.$router.push('/');
    }
  }
}
</script>

<template>
  <h1 class="text-6xl font-bold">Job results</h1>
  <button @click="goToHome">home page</button>
</template>

<style scoped>

</style>
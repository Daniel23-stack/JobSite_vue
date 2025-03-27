<script>
export default {
  name: 'JobsView',
  computed:{
    currentJobID(){
      return this.$route.params.id;
    }
  }
}
</script>

<template>
<div>jbo page for {{currentJobID}}</div>
</template>

<style scoped>

</style>
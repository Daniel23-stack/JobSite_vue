<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'TheSubnav',
  components: { FontAwesomeIcon },
  computed:{
    onJobResultsPage(){
     return  this.$route.name === "JobResults"
    }
  }

}
</script>

<template>
<div class="h-16 w-full border-b border-solid border-brand-grey-1 bg-white">
  <div class="flex items-center h-full px-8">
    <div v-if="onJobResultsPage">
      <font-awesome-icon :icon="['fas','search']" class="mr-3"/>
        <span> <span class="text-brand-green-1"> 10843 </span>jobs matched</span>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
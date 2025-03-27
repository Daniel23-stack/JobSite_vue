<script>
import JobFilterSideBar from '@/JobResults/JobFilterSidebar/JobFilterSideBar.vue'
import JobListings from '@/JobResults/JobListings.vue'

export default {
  name: 'JobResultsView',
  components:{
    JobListings,
    JobFilterSideBar,
  }

}
</script>

<template>
  <div class="flex w-full flex-row flex-nowrap">
  <job-filter-side-bar/>
    <JobListings/>
  </div>
</template>

<style scoped>

</style>
<script>
import JobListing from '@/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: { JobListing }
}
</script>

<template>
  <main class="flex-auto bg-brand-grey-2 p-8">
    <ol>
      <job-listing/>
      <job-listing/>
      <job-listing/>
    </ol>
  </main>
</template>

<style scoped>

</style>
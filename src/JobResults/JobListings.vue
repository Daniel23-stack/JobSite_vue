<script>
import JobListing from '@/JobResults/JobListing.vue'
import axios from 'axios'

export default {
  name: 'JobListings',
  components: { JobListing },
  data() {
    return {
      jobs:[],
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/jobs');
    this.jobs = response.data;
    }
}

</script>

<template>
  <main class="flex-auto bg-brand-grey-2 p-8">
    <ol>
      <job-listing v-for="job in jobs" :key="job.id" :job="job"/>
    </ol>
  </main>
</template>

<style scoped>

</style>
<script>
export default {
  name: 'JobListing'
}
</script>

<template>
  <li class="mb-7">
    <router-link to="/job/results/1" class="mx-auto block rounded border border-solid border-brand-grey-2 bg-white hover:shadow-gray">
      <div class="mx-8 border-b border-solid border-brand-grey-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">
          Manager Reality
        </h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>Bobo</span>
          </div>

          <span>Midrand, CA, SA</span>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class=" mt-1 mb-2">Qualifications</h3>
          <div>
            <ul class="list-disc pl-8">
              <li>Asocciate degree</li>
              <li>5 years od SQl</li>
              <li>DATA modlelling and statistics</li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/job/results/1" class=" text-brand-blue-1">
            Expand
          </router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>

<style scoped>

</style>
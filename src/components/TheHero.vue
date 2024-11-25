<script>
import TheHeadline from '@/components/TheHeadline.vue'

export default {
  name: 'TheHero',
  components: { TheHeadline }

}
</script>

<template>
    <main>
      <section class="flex flex-col h-screen bg-yellow-200 pt-10 pb-20">
        <div class="grid grid-cols-12">
          <div class="col-span-1 col-start-1 border border-blue-700"> coll1</div>
          <div class="col-span-5 col-start-2 border border-blue-700"><TheHeadline/></div>
          <div class="col-span-5 col-start-7 border border-blue-700">cool 5</div>
          <div class="col-span-1 col-start-12 border border-blue-700">cool 1</div>
        </div>
      </section>
    </main>
</template>

<style scoped>

</style>
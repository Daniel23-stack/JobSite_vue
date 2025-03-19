<script>
import ActionButton from "@/components/Shared/ActionButton.vue"

export default {
  name: 'JobSearchForm',
  components:{ActionButton},

  data() {
    return {
      role:"",
      location:"",
    }
  },

}
</script>

<template>
 <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-grey-3">
   <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-2" />
   <div class="flex h-full flex-1 flex-nowrap text-base font-light">

     <div class="flex h-full flex-1 relative items-center pr-3">
       <label class="absolute left-0 -top-10">Role</label>
       <input type="text"
              v-model="role"
              placeholder="software engineer"
              class="w-full text-lg font-normal focus:outline-none"/>
     </div>
     <span class="flex items-center h-full border-l border-r border-brand-grey-3 bg-brand-grey-2 px-3">
       in
     </span>

     <div class="flex h-full flex-1 relative items-center pl-3">
       <label class="absolute left-0 -top-10">Where?</label>
       <input type="text"
              v-model="location"
              placeholder="Midrand"
              @input = "location = $event.target.value"
              class="w-full text-lg font-normal focus:outline-none"/>
     </div>

   </div>
   <action-button text="Search" type="secondary" class="rounded-r-3xl"/>
 </form>
</template>

<style scoped>

</style>
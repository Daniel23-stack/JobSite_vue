<script>
import ActionButton from "@/components/Shared/ActionButton.vue"
import textInput from '@/components/Shared/TextInput.vue'
export default {
  name: 'JobSearchForm',
  components:{ActionButton, textInput},

  data() {
    return {
      role:"",
      location:"",
    }
  },
  methods:{
    searchForJobs(){
      this.$router.push({
        name:"JobResults",
        query:{role:this.role,
              location:this.location}
      }
      )
    }
  }

}
</script>

<template>
 <form @submit.prevent="searchForJobs" class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-grey-3">
   <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-2" />
   <div class="flex h-full flex-1 flex-nowrap text-base font-light">

     <div class="flex h-full flex-1 relative items-center pr-3">
       <label class="absolute left-0 -top-10">Role</label>
       <text-input v-model="role" placeholder="software engineer" />
     </div>
     <span class="flex items-center h-full border-l border-r border-brand-grey-3 bg-brand-grey-2 px-3">
       in
     </span>

     <div class="flex h-full flex-1 relative items-center pl-3">
       <label class="absolute left-0 -top-10">Where?</label>
       <text-input v-model="location" placeholder="Midrand" />
     </div>

   </div>
   <action-button text="Search" type="secondary" class="rounded-r-3xl"/>
 </form>
</template>

<style scoped>

</style>
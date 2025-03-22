<template>
  <div>
    <MainNav/>
  </div>
  <router-view/>
</template>
<script>
import MainNav from '@/components/Navigation/MainNav.vue'
import TheHero from '@/components/Jobsearch/TheHero.vue'

export default {
  name: "App",
  components:{
    MainNav
  }
}
</script>
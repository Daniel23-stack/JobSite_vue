<template>
  <MainNav/>
  <TheHero/>
</template>
<script>
import MainNav from '@/components/Navigation/MainNav.vue'
import TheHero from '@/components/Jobsearch/TheHero.vue'

export default {
  name: "App",
  components:{
    TheHero,
     MainNav,
  }
}
</script>
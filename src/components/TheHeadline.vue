<script>
import nextElementList from '@/utils/nextElementList.js'

export default {
  name: 'TheHeadline',
  data(){
    return {
      action: "Build",
      interval: null,
    };
  },
  computed:{
    actionClasses(){
      return {
       [this.action.toLowerCase()]:true,
      }
    }
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods:{
    changeTitle(){
      this.interval = setInterval(() =>{
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementList(actions,this.action);
      }, 3000)
    }
  }
}

</script>

<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter"><span :class="actionClasses">{{action}}
    <br>
    </span> for everyone</h1>
    <h2 class="text-3xl font-light"> find your next job at the bobo corp</h2>
  </section>
</template>

<style scoped>
.build{
  color: #1a73e8;
}
.design{
  color: #f9ab00;
}
.code{
  color: #34a853;
}
.create{
  color: #d93025;
}
</style>


<template>
<header :class="['w-full', 'text-sm', headerHeightClass]">
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div class="flex flex-nowrap h-full border-b border-solid border-brand-grey-1 px-8">
      <router-link :to="{name: 'Home'}" class="flex h-full items-center text-xl">Bobo Careers</router-link>
      <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in menuItems" v-bind:key="menuItem.text">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">{{menuItem.text}}</router-link>
            </li>
          </ul>
      </nav>
      <div class="ml-auto flex h-full items-center">
            <profile-image v-if="isloggedIn"/>
            <action-button v-else text="Sign In"
                           :is-primary="false"
                           type="primary"
                           @click="loginUser"/>
      </div>
    </div>
    <the-subnav v-if="isloggedIn"/>
  </div>
</header>

</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'

export default {
  name: 'MainNav',
  components:{
    TheSubnav,
    ProfileImage,
    ActionButton
  },
  data(){
    return{
      menuItems: [
        {text:"Teams", url:"/"},
        {text:"Locations", url:"/"},
        {text:"Life at Bobo",url:"/"},
        {text:"how We Hire", url:"/"},
        {text:"Students", url: "/"},
        {text:"Jobs", url: "/jobs/results"}
      ],
      isloggedIn: false,
    }
  },
  computed:{
    headerHeightClass(){
      return {
        "h-16": !this.isloggedIn, //true
        "h-32": this.isloggedIn //false
      }
    }
  },
  methods:{
    loginUser(){
      this.isloggedIn = true;
    }
  }
}
</script>
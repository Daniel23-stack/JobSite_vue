

<template>
<header :class="['w-full', 'text-sm', headerHeightClass]">
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div class="flex flex-nowrap h-full border-b border-solid border-brand-grey-1 px-8">
      <a v-bind:href=" url " class="flex h-full items-center text-xl">{{company}}</a>
      <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in menuItems" v-bind:key="menuItem">
              <a href="" class="flex h-full items-center py-2.5">{{menuItem}}</a>
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
import ActionButton from '@/components/ActionButton.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import TheSubnav from '@/components/TheSubnav.vue'

export default {
  name: 'MainNav',
  components:{
    TheSubnav,
    ProfileImage,
    ActionButton
  },
  data(){
    return{
      company:"Bobo Careers",
      url:"http://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bobo",
        "how We Hire",
        "Students",
        "Jobs"
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
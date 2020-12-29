<template>
  <div class="home">
    <Filters
    :words=keywords
    />
  <Profile
  v-for="profile in profiles"
  :key=profile.id
  :profile=profile
  v-on:getIdFilter= "HandleChange"
/>
  </div>
</template>

<script>
import "@/sass/home.scss";
import Profile from '../components/Profile'
import Filters from '../components/Filters'
//GET DATA PROFILE
export default {
  name: "Home",
  components: {
    Profile,
    Filters
  },
  data() {
    return {
      profiles: [], 
      keywords:[]
    };
  },
  methods:{
    HandleChange:function (e){
      this.keywords.push(e)
      console.log(this.keywords)
    }
     
  },
  mounted: function() {
   const data = fetch("http://localhost:3001/profiles");
    data
    .then((res) => res.json())
    .then((data) => {
     this.profiles=  data
     console.log(this.profiles)
    });
  },
};
</script>

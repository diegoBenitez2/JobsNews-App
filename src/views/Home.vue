<template>
  <div class="home">
<Profile
  v-for="profile in profiles"
  :key=profile.id
  :profile=profile
/>
  </div>
</template>

<script>
import "@/sass/home.scss";
import Profile from '../components/Profile'
//GET DATA PROFILE
export default {
  name: "Home",
  components: {
    Profile
  },
  data() {
    return {
      profiles: [],
    };
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

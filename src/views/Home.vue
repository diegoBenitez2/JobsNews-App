<template>
  <div class="home">
    <Filters :keywords="SharedKeywords" />

    <Profile v-for="profile in profiles" :key="profile.id" :profile="profile" />
  </div>
</template>

<script>
import "@/sass/home.scss";
import Profile from "../components/Profile";
import Filters from "../components/Filters";
import Store from "../helppers/store";
//GET DATA PROFILE
export default {
  name: "Home",
  components: {
    Profile,
    Filters,
  },
  data() {
    return {
      profiles: [],
      SharedKeywords: Store.state.keyWords,
    };
  },
  methods: {
    GetDataForFilter: function() {
      let filters = "";
      this.SharedKeywords.forEach((element, index) => {
        filters += `${element.type}=${element.value}`;
        if (index !== this.SharedKeywords.length - 1) {
          filters += "&";
        }
      });

      const response = fetch(`http://localhost:3001/profiles?${filters}`);
      response
        .then((res) => res.json())
        .then((data) => {
          this.profiles = data;
        });
    },
  },
  watch: {
    SharedKeywords: "GetDataForFilter",
  },
  mounted: function() {
    const data = fetch("http://localhost:3001/profiles");
    data
      .then((res) => res.json())
      .then((data) => {
        this.profiles = data;
      });
  },
};
</script>

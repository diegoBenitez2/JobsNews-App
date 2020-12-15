<template>
  <div class="profile">
    <div class="info">
      <img class="logo" :src="profile.logo" :alt="profile.company" />

      <div class="description">
        <div class="states-company">
          <p class="company">{{ profile.company }}</p>
        </div>
        <h3 class="position">{{ profile.position }}</h3>
        <div class="features">
          <p class="desc-features">{{ profile.postedAt }}</p>
          <p class="desc-features">{{ profile.contract }}</p>
          <p class="desc-features">{{ profile.location }}</p>
        </div>
        <div class="roles-skill"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../sass/components/profile.scss";
export default {
  name: "Profile",
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
};
</script>

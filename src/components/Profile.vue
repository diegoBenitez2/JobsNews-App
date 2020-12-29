<template>
  <div class="profile">
    <div class="info">
      <img class="logo" :src="profile.logo" :alt="profile.company" />

      <div class="description">
        <div class="states-company">
          <p class="company">{{ profile.company }}</p>
          <p v-if="profile.new" class="new ">new!</p>
          <p v-if="profile.featured" class="featured">featured</p>
        </div>
        <h3 class="position">{{ profile.position }}</h3>
        <div class="features">
          <p class="desc-features">{{ profile.postedAt }}</p>
          <p class="desc-features">{{ profile.contract }}</p>
          <p class="desc-features">{{ profile.location }}</p>
        </div>
      </div>
    </div>
    <div class="roles-skills">
      <button
        :name="profile.role"
        class="btn-skills"
        @click="
          AddKeyWords({
            type: 'role',
            value: profile.role,
          })
        "
      >
        {{ profile.role }}</button
      ><button
        :name="profile.level"
        class="btn-skills"
        v-on:click="
          AddKeyWords({
            type: 'level',
            value: profile.level,
          })
        "
      >
        {{ profile.level }}
      </button>
      <button
        v-for="language in profile.languages"
        :key="language"
        :name="language"
        class=" btn-skills languages"
        v-on:click="
          AddKeyWords({
            type: 'language',
            value: language,
          })
        "
      >
        {{ language }}
      </button>
      <button
        class="btn-skills tools"
        v-for="tool in profile.tools"
        :key="tool"
        :name="tool"
        v-on:click="AddKeyWords({
          type:'tools',
          value:tool
          })"
      >
        {{ tool }}
      </button>
    </div>
  </div>
</template>

<script>
import "../sass/components/profile.scss";
import Store from "../helppers/store";
export default {
  name: "Profile",
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  methods: {
    AddKeyWords: (value) => {
      Store.SetKeywordsAction(value);
    },
  },
};
</script>

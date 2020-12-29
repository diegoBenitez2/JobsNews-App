<template>
  <div 
  v-if="keywords.length !== 0"
  class="modal">
  <div class="container_keywords">
<KeyWords
  v-for="keyword in keywords"
  :key= keyword.value
  :item= keyword
/>
  </div>

    <a class="clean-modal" @click="CleanFilters">clear</a>
  </div>
</template>

<script>
import "../sass/components/filters.scss";
import KeyWords from "./keyWord"
import Store from '../helppers/store'
export default {
  name: "Filters",
  components:{
    KeyWords
  },
  props:{
    keywords: Array
  },
  methods:{
    CleanFilters: function () {
      Store.CleanFilterAction()
    }
  }
};
</script>

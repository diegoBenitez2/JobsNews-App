<template>
  <div 
  v-if="cleanModal"
  class="modal">
  <div class="container_keywords">
<KeyWords
  v-for="kw in words"
  :key= kw
  :word= kw
/>
  </div>

    <a class="clean-modal" v-on:click="cleanModal = false">clear</a>
  </div>
</template>

<script>
import "../sass/components/filters.scss";
import KeyWords from "./keyWord"
export default {
  name: "Filters",
  components:{
    KeyWords
  },
  props:{
    words: Array
  },
  data(){
    return{
      cleanModal: true
    }
  }
};
</script>

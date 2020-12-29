<template>
  <div class="container" >
    <p class="key">{{ item.value }}</p>
    <button class="btn_closeKey" @click="DropKeyWords(item.value)">X</button>
  </div>
</template>
<script>
import "../sass/components/keyWord.scss";
import Store from '../helppers/store'

export default {
  name: "keyWord",
  props: {
    item: Object,
  },
  methods:{
    DropKeyWords: function (dropvalue) {
      Store.DropKeywordsAction(dropvalue)
    }
  }
};
</script>

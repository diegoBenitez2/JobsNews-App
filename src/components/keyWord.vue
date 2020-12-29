<template>
  <div class="container" v-if="closeKey">
    <p class="key">{{ word }}</p>
    <button class="btn_closeKey" @click="closeKey = false">X</button>
  </div>
</template>
<script>
import "../sass/components/keyWord.scss";
export default {
  name: "keyWord",
  props: {
    word: String,
  },
  data() {
    return {
      closeKey: true,
    };
  },
};
</script>

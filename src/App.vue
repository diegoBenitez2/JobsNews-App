<template>
  <div id="app">
    <Header/>
     <router-view></router-view>
  </div>
</template>


<script>
import Header from './components/Header'
export default{
  components:{
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
@import './sass/config.scss';
  body{
    margin: 0;
  }
#app {
  font-family: 'Spartan',Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 15px;
  padding: 0;
  margin: 0;
  background: $BgApp;

}
</style>

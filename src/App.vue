<template>
  <div id="app">
    <!-- <router-view/> -->
    <banner></banner>
    <calendar></calendar>
    <!-- <headlines></headlines> -->
  </div>
</template>

<script>
import banner from './components/banner.vue';
import calendar from './components/calendar.vue';
// import headlines from './components/headlines.vue'
export default {
    name: "App",
    components: { 
      banner,
      calendar,
      // headlines
     }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <div class="contaner">
        <headerNav></headerNav>
        <homeVue></homeVue>
    </div>
  </div>
</template>

<script>
import headerNav from './components/Header.vue'
import homeVue from './components/Home.vue'
export default {
  name: 'app',
  components:{
    headerNav,
    homeVue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

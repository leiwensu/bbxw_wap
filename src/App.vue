<template>
  <div id="app">
    <div class="container">
        <headerNav v-show="headShow"></headerNav>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerNav from './components/Header.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'app',
    components:{
        headerNav
    },
    computed:mapGetters([
        'headShow'
    ]),
    watch:{
        $route(to){
          var path = to.path;
          this.headerChange(path);
        }
    },
    methods:{
        headerChange(path){
            if(path.indexOf('search')>0){
                this.$store.dispatch('headHide');
            }else{
                this.$store.dispatch('headShow');
            }
        }
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

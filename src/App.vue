<template>
  <div id="app">
    <div class="container">
        <headerNav v-show="headShow"></headerNav>
        <router-view></router-view>
        <FooterVue v-bind:isLinksShow="footerLinksShow" v-show="footerShow"></FooterVue>
    </div>
  </div>
</template>

<script>
import headerNav from './components/Header.vue'
import FooterVue from './components/Footer.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'app',
    components:{
        headerNav,
        FooterVue
    },
    computed:mapGetters([
        'headShow',
        'footerLinksShow',
        'footerShow'
    ]),
    watch:{
        $route(to){
          var path = to.path;
          this.headerChange(path);
          this.footerLinksChange(path);
          this.footerChange(path);
        }
    },
    methods:{
        headerChange(path){
            if(path.indexOf('search')>0){
                this.$store.dispatch('headHide');
            }else{
                this.$store.dispatch('headShow');
            }
        },
        footerLinksChange(path){
          if(path.indexOf('home')>0){
            this.$store.dispatch('footerLinksShow');
          }else{
            this.$store.dispatch('footerLinksHide');
          }
        },
        footerChange(path){
          if (path.indexOf('search')>0) {
            this.$store.dispatch('footerHide')
          }else{
            this.$store.dispatch('footerShow')
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

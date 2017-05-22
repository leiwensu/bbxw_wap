// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import setRem from './assets/js/common'

Vue.config.productionTip = false
require('./assets/css/base.less');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted () {
    setRem();
    window.addEventListener("orientationchange",setRem);//监听横屏
    window.addEventListener("resize",setRem);//监听屏幕大小变化
  }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/axios'
import { Carousel, Slide } from 'vue-carousel';

Vue.config.productionTip = false

new Vue({
  Carousel,
  Slide,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

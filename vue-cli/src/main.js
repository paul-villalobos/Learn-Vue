import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-servers', Home);
// vue init webpack-simple vue-cli
// npm run dev
// npm run build
new Vue({
  el: '#app',
  render: h => h(App)
})

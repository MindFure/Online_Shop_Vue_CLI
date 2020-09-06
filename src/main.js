import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import './assets/styles/variables.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/composition-api'
import Buefy from 'buefy'
import './assets/sass/global.sass'
import './plugins/v-img'

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

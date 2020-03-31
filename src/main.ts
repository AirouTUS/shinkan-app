import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins/common'
import './plugins/composition-api'
import Buefy from 'buefy'
import './assets/sass/global.sass'
import './plugins/v-img'
import './plugins/v-modal'
import './plugins/v-infinite-loading'

Vue.config.productionTip = false

Vue.use({install: vue => vue.mixin(mixin)})

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

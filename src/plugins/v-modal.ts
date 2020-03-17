import Vue from 'vue'
import router from '@/router'
import store from '@/store/index'
import VModal from '@/components/VModal.vue'

Vue.prototype.$modal = (props: any) => {
  const VModalComponent = Vue.extend(VModal)
  return new VModalComponent({
    props,
    router,
    store,
    el: document.createElement('div')
  })
}
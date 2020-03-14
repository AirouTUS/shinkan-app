<template lang="pug">
  div#app app
    router-view
    footer-nav
</template>

<script lang="ts">
import Vue from 'vue'
import FooterNav from '@/components/FooterNav.vue'
export default Vue.extend({
  components:{FooterNav}
  
})
</script>

<style lang="sass">
  #app
    height: 100%
    width: 100vw
</style>

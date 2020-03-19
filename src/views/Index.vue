<template lang="pug">
  div#index
    transition(name="slide-fade-reverse" mode="out-in")
      router-view.index-container
    footer-nav
</template>

<script lang="ts">
import Vue from 'vue'
import FooterNav from '@/components/FooterNav.vue'
export default Vue.extend({
  components:{FooterNav},
  beforeCreate() {
    this.$store.dispatch('getCategories')
  }
})
</script>

<style lang="sass" scoped>
  #index
    height: 100%
    .index-container
      // height: calc(100% - #{$footer-nav-height})
      padding-bottom: $footer-nav-height
</style>

<template lang="pug">
  div#index.view-index
    transition(name="slide-fade-reverse" mode="out-in")
      router-view.index-container
    div.view-index-background
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
    .view-index
      &-background
        z-index: -5
        background: url(/svg/Rectangle51.svg)
        position: fixed
        bottom: 0
        background-repeat: no-repeat
        height: 200px
        width: 100%
    .index-container
      padding-bottom: $footer-nav-height
</style>

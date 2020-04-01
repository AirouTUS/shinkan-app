<template lang="pug">
  div#index.view-index
    transition(name="slide-fade-reverse" mode="out-in")
      router-view.index-container
    div.index-background
      div.index-background-image
    footer-nav
</template>

<script lang="ts">
import Vue from 'vue'
import FooterNav from '@/components/FooterNav.vue'
export default Vue.extend({
  components:{FooterNav},
  beforeCreate() {
    // this.$store.dispatch('category/getList')
  }
})
</script>

<style lang="sass" scoped>
  #index
    height: 100%
    .index-container
      min-height: 100%
      padding-bottom: $footer-nav-height
    .index-background
      z-index: -5
      position: fixed
      top: 0
      bottom: 0
      left: 0
      right: 0
      background-color: $bg-default-color
      &-image
        z-index: -4
        background: url(/svg/Rectangle55.svg)
        position: fixed
        bottom: 0
        background-repeat: no-repeat
        height: 200px
        width: 100%
</style>

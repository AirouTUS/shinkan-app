<template lang="pug">
  div#index.view-index
    transition(name="slide-fade-reverse" mode="out-in")
      router-view.index-container
    div.view-index-background(:style="{backgroundImage: 'url(' + require('@/assets/svg/Rectangle51.svg') + ')' }")
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
        position: fixed
        bottom: 0
        // background-size: 100% 100%
        background-repeat: no-repeat
        height: 150px
        width: 100%
    .index-container
      // height: calc(100% - #{$footer-nav-height})
      padding-bottom: $footer-nav-height
</style>

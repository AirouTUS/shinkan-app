<template lang="pug">
  nav#footer-nav.flexbox.footer-nav
    router-link.flexcolumn.has-space-betweeen.footer-nav-item(to="/" exact)
      tus-icon
      label TUS新歓
    router-link.flexcolumn.has-space-between.footer-nav-item(to="/circles" exact)
      list-icon
      label サークル一覧
</template>

<script lang="ts">
import Vue from "vue"
import TusIcon from '@/components/svg/TusIcon.vue'
import ListIcon from '@/components/svg/ListIcon.vue'

export default Vue.extend({
  components: { TusIcon, ListIcon }
})
</script>

<style lang="sass">
  #footer-nav
    .router-link-active
      > p
        color: $main-color
      > svg > path
        fill: $main-color
</style>

<style lang="sass" scoped>
  .footer-nav
    position: fixed
    bottom: 0
    width: 100vw
    padding: 8px 24px
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15)
    z-index: 9
    background: white
    > .footer-nav-item
      align-items: center
      padding-right: 16px
      color: $text-gray
      transition: all .2s ease
      > label
        padding-top: .25rem
        font-size: $text-mini
        color: currentColor
        font-weight: bold
      &.router-link-active
        color: $main-color
</style>
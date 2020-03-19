<template lang="pug">
  nav#footer-nav.flexbox.footer-nav
    router-link.flexcolumn.has-space-betweeen.footer-nav-item(to="/" exact)
      tus-icon
      label TUS新歓
    router-link.flexcolumn.has-space-between.footer-nav-item(:to='{ path: "/circles", query: { category: 0 } }' :class="{'another-active-patarn': isActiveLink('/circles')}")
      list-icon
      label サークル一覧
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TusIcon from '@/components/Svg/TusIcon.vue'
import ListIcon from '@/components/Svg/ListIcon.vue'

export default defineComponent({
  components: { TusIcon, ListIcon },
})
</script>

<style lang="sass">
  #footer-nav
    .router-link-active
      > p
        color: $main-color
      > svg > path
        fill: $main-color
    .another-active-patarn
      > p
        color: $main-color
      > svg > path
        fill: $main-color
</style>

<style lang="sass" scoped>
  .footer-nav
    height: $footer-nav-height
    position: fixed
    bottom: 0
    width: 100vw
    padding: 8px 32px
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15)
    z-index: 9
    background: white
    > .footer-nav-item
      align-items: center
      margin-right: 24px
      color: $text-gray
      transition: all .2s ease
      > label
        padding-top: .25rem
        font-size: $text-mini
        color: currentColor
        font-weight: bold
      &.router-link-active
        color: $main-color
      &.another-active-patarn
        color: $main-color
</style>
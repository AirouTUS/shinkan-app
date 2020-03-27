<template lang="pug">
  div.footer-wrapper.flexbox.has-space-around
    nav#footer-nav.footer-nav.flexbox.bg-white
      router-link.footer-nav-item.flexcolumn.is-middle.is-center.gray(to="/" exact)
        b-icon(icon="home")
        label.is-size6.mt-1 ホーム
      router-link.footer-nav-item.flexcolumn.is-middle.is-center.gray(to="/circles" exact)
        b-icon(icon="list")
        label.is-size6.mt-1 サークル一覧
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
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
  .footer-wrapper
    position: fixed
    bottom: 0
    width: 100vw
    height: $footer-nav-height
    padding-bottom: 16px
    z-index: 9
  .footer-nav
    padding: 0px 28px
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25)
    border-radius: 100px
    > .footer-nav-item
      margin: 0 16px
      transition: all .2s ease
      &:hover
        color: $main-color !important
      > label
        color: currentColor
        font-weight: bold
      &.router-link-active
        color: $main-color
      &.another-active-patarn
        color: $main-color
</style>
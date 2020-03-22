<template lang="pug">
  nav#footer-nav.flexbox.footer-nav.bg-white
    router-link.flexcolumn.footer-nav-item.gray.is-center(to="/" exact)
      b-icon(icon="home")
      label.is-size5 ホーム
    div.flexcolumn.footer-nav-item.gray.is-center(@click="onClickCircles" v-show="firstCategoryId" :class="{'another-active-patarn': isActiveLink('/circles')}")
      b-icon(icon="list")
      label.is-size5 サークル一覧
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  setup(props, {root}) {
    const firstCategoryId = computed(() => root.$store.state.categories[0]?.id)

    const onClickCircles = () => {
      if (root.$route.name === "circles") return
      root.$router.push({ path: "/circles", query: {categoryId: firstCategoryId.value.toString()}})
    }
    return {
      firstCategoryId, onClickCircles
    }
  }
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
    padding: 8px 44px
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15)
    border-radius: 32px 32px 0 0
    z-index: 9
    > .footer-nav-item
      align-items: center
      margin-right: 24px
      transition: all .2s ease
      > label
        padding-top: .25rem
        color: currentColor
        font-weight: bold
      &.router-link-active
        color: $main-color
      &.another-active-patarn
        color: $main-color
</style>
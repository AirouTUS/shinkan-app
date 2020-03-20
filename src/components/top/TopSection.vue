<template lang="pug">
div.top-section
  div.top-section-content.flexcolumn.has-space-around(:class="{'bg-loading': !imageLoaded}")
    p(v-show="imageLoaded")
      | 東京理科大学 
      br 
      | WEB新歓 2020
  v-img.top-section-bg(src="/img/campus.jpg" @onLoaded="imageLoaded = true")

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      imageLoaded: false
    }
  }
})
</script>

<style lang="sass">
  .top-section
    &-bg
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: 1
      > img
        object-fit: cover
</style>

<style lang="sass" scoped>
  .top-section
    position: relative
    width: 100%
    height: 240px
    &-content
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: 2
      height: 100%
      background-color: rgba(50, 50, 50, 0.3)
      > p
        color: white
        font-weight: bold
        text-align: center
        font-size: 36px
        line-height: 48px
</style>
<template lang="pug">
div#top-section
  div.flexcolumn.has-space-around.content(:class="{'bg-gray': imageLoaded}")
    p.content-message(v-show="imageLoaded")
      | 東京理科大学 
      br 
      | WEB新歓 2020
  v-img.main-image(src="/img/campus.jpg" @onLoaded="imageLoaded = true")

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
  #top-section
    position: relative
    // overflow: hidden
    width: 100%
    height: 200px
    .main-image
      position: absolute
      // left: -2px
      // top: -2px
      // width: calc(100% + 4px)
      // height: calc(100% + 4px)
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: -1
      > img
        object-fit: cover
        // -ms-filter: blur(2px)
        // filter: blur(2px)
</style>

<style lang="sass" scoped>
  .bg-gray
    background-color: rgba(50, 50, 50, 0.3)
  .content
    height: 100%
    &-message
      color: white
      font-weight: bold
      text-align: center
      font-size: 36px
      line-height: 48px
</style>
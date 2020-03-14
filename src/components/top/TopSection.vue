<template lang="pug">
div#top-section
  div.flexcolumn.has-space-around.content
    p.content-message
      | 東京理科大学 
      br 
      | WEB新歓 2020
  v-img.main-image(src="/img/campus.jpg")

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="sass">
  #top-section
    position: relative
    overflow: hidden
    width: 100%
    height: 200px
    .main-image
      position: absolute
      left: -2px
      top: -2px
      width: calc(100% + 4px)
      height: calc(100% + 4px)
      z-index: -1
      > img
        object-fit: cover
        -ms-filter: blur(2px)
        filter: blur(2px)
</style>

<style lang="sass" scoped>
  .content
    height: 100%
    &-message
      color: white
      font-weight: bold
      text-align: center
      font-size: 32px
      line-height: 48px
</style>
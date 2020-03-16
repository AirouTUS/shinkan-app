<template lang="pug">
  div#circle-detail
    b-carousel(:indicator-inside="false")
      b-carousel-item
        v-img.item-image(src="https://pbs.twimg.com/media/ES_qmkgUYAIpopG?format=jpg&name=4096x4096")
      b-carousel-item
        v-img.item-image(src="https://pbs.twimg.com/media/ES_qmkgUYAIpopG?format=jpg&name=4096x4096")
      b-carousel-item
        v-img.item-image(src="https://pbs.twimg.com/media/ES_qmkgUYAIpopG?format=jpg&name=4096x4096")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="sass">
  #circle-detail
    .carousel
      z-index: -1
    .item-image
      height: 280px
      > img
        object-fit: contain
        background: white
</style>
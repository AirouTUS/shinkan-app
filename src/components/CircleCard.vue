<template lang="pug">
  div#circle-card.circle-card.has-blur
    div.is-blur
    v-img.eye-catch(:src="circle.eyecatch")
    
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Circle } from '@/types'

export default Vue.extend({
  props: {
    circle: {
      type: Object as PropType<Circle>,
      required: true
    }
  }
})
</script>

<style lang="sass">
  #circle-card
    .eye-catch
      > img
        width: 100%
        height: 100%
        object-fit: cover
</style>

<style lang="sass" scoped>
  .is-blur
    z-index: 1
  .circle-card
    background: white
    border-radius: 4px
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.20)
    &-content
      overflow: hidden
      .is-loading
        height: $size-3
</style>
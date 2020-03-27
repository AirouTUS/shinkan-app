<template lang="pug">
  div#circle-card-mini.circle-card-mini
    div.square-container
      v-img.eye-catch(:src="circle.eyecatch")
    div.circle-card-mini-content(:class="{'is-loading': !circle.name}")
      p.name.is-size4.bold {{ circle.name }}
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
  #circle-card-mini
    .eye-catch
      > img
        width: 100%
        height: 100%
        object-fit: contain
</style>

<style lang="sass" scoped>
  .circle-card-mini
    background: white
    border-radius: 8px
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25)
    &-content
      overflow: hidden
      margin: 12px
      &.is-loading
        height: $size-4
</style>
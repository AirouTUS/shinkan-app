<template lang="pug">
  div#circle-card-mini.circle-card-mini
    div.square-container
      v-img.eye-catch(:src="circle.eyecatch")
    div.circle-card-mini-content(:class="{'is-loading': !circle.name}")
      p.name.m-3 {{ circle.name }}
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
    border: solid 1px $bg-gray
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.20)
    &-content
      overflow: hidden
      &.is-loading
        height: $size-3
</style>
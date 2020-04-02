<template lang="pug">
  div#circle-card-mini.comp.bg-white
    div.square-container
      v-img.eye-catch(:src="circle.eyecatch")
    div.comp-content
      p.m-3.is-size4(:class="{'is-loading': !circle.name}") {{ circle.name}}
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
        object-fit: cover
</style>

<style lang="sass" scoped>
  .comp
    border-radius: 8px
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.20)
    &-content
      overflow: hidden
      .is-loading
        height: $size-3
</style>
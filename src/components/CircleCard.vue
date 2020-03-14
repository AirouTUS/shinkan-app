<template lang="pug">
  div.circle-card
    img.eye-catch(:src="circle.eyecatch")
    p.catch-copy {{ circle.catchCopy }}
    p.name {{ circle.name }}
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

<style lang="sass" scoped>
  .circle-card
    margin: 12px 0
    .eye-catch
      width: 100%
      height: 250px
      object-fit: cover
      border-radius: 8px
    .catch-copy
      margin-top: 8px
      font-size: $text-small
      color: $text-gray
    .name
      margin-top: 4px
      font-size: $text-large
      font-weight: bold
</style>
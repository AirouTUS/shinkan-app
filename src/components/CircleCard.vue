<template lang="pug">
  div#circle-card.circle-card
    v-img.eye-catch(:src="circle.eyecatch")
    div.circle-card-content(:class="{'is-loading': !circle.name}")
      p.name.bold.is-large.mt-8 {{ circle.name }}
      p.gray.mt-4 {{ circle.catchCopy }}
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
      width: 100%
      height: 250px
      > img
        object-fit: cover
</style>

<style lang="sass" scoped>
  .circle-card
    border-radius: 8px
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)
    background: white
    .circle-card-content
      padding: 0 16px 8px 16px
      &.is-loading
        height: 54px
</style>
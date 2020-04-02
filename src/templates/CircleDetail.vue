<template lang="pug">
  div(v-if="!circle.name")
    b-loading(:active="true")
  div#circle-detail.circle.bg-white(v-else)
    b-carousel.circle-images(:autoplay="true" :has-drag="true" :indicator="false")
      b-carousel-item(v-for="(image, i) in circle.images.length > 0 ? circle.images : [{}]" :key="i")
        v-img.circle-image(:src="image.url")
    div.circle-eyecatch
      v-img(:src="circle.eyecatch")
    div.circle-title.flexcolumn.is-middle
      h1.bold.is-size1.pt-3 {{ circle.name }}
      p.text-gray.mt-1(v-if="circle.catchCopy") {{ circle.catchCopy }}
    div.circle-content
      p.text-gray.is-size4.pt-3.mt-3
        b-icon(icon="hand-point-right")
        span {{ circle.about }}
      p.pt-3.is-size4 {{ circle.description }}
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import CircleModel from '../models/CircleModel'

export default defineComponent({
  setup(props, {root}) {
    const state = reactive({
      circle: {}
    })
    const circleId = root.$route.params.circleId
    new CircleModel().get(circleId).then(res => {
      state.circle = res.data
    }) 
    return {
      ...toRefs(state),
      root
    }   
  }
})
</script>

<style lang="sass">
  #circle-detail
    .indicator-item
      > .indicator-style
        background-color: $main-color
      &:not(.is-active)
        > .indicator-style
          border-color: $main-color
          background: white

    .circle-eyecatch
      > div
        border-radius: 100px
        border: solid 4px white
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25)
        &.is-loading
          background: $loading-color
        > img
          border-radius: 100px
          object-fit: contain
    .circle-image
      width: 100%
      height: 400px
      &.is-loading
        background: linear-gradient(-135deg, #E4A972, #9941D8)
      > img
        object-fit: contain
</style>

<style lang="sass" scoped>
  .circle
    padding: 12px
    position: relative
    &-header
      position: absolute
      z-index: 1
    &-eyecatch
      position: relative
      > div
        position: absolute
        height: 120px
        width: 120px
        top: -60px
        left: calc( 50% - 50px )
    &-title
      padding: 60px 16px 0 16px
      text-align: center
    &-content
      padding: 0 16px
</style>
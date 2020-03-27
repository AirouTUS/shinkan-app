<template lang="pug">
  div(v-if="!circle.name")
    b-loading(:active="true")
  div#circle.circle.bg-white(v-else)
    div.circle-header
      div.m-3.p-2.action(@click="root.$router.go(-1)")
        b-icon(icon="chevron-left")
    b-carousel.circle-images(:autoplay="true" :has-drag="true" :indicator="false")
      b-carousel-item(v-for="(image, i) in circle.images.length > 0 ? circle.images : [{}]" :key="i")
        v-img.circle-image(:src="image.url")
    div.circle-eyecatch
      v-img(:src="circle.eyecatch")
    div.circle-title.flexcolumn.is-middle
      h1.bold.is-size1.pt-3 {{ circle.name }}
      p.gray.mt-1(v-if="circle.catchCopy") {{ circle.catchCopy }}
    div.circle-content
      p.gray.is-size4.pt-3.mt-3
        b-icon(icon="hand-point-right")
        span {{ circle.about }}
      p.pt-3.is-size4 {{ circle.description }}
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import CircleModel from '../models/CircleModel'

// import Vue from 'vue'

// export default Vue.extend({
//   data() {
//     return {
//       circle: {}
//     }
//   },
//   created() {
//     const circleId = this.$route.params.circleId
//     new CircleModel().get(circleId).then(res => {
//       this.circle = res.data
//     })
//   }
// })
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
  #circle
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
        > img
          border-radius: 100px
          object-fit: contain
    .circle-image
      width: 100%
      height: 240px
      > img
        object-fit: contain
</style>

<style lang="sass" scoped>
  .action
    color: white
    border-radius: 100px
    background: rgba(0, 0, 0, 0.5)
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25)
  .circle
    position: relative
    &-header
      position: absolute
      z-index: 1
    &-eyecatch
      position: relative
      > div
        position: absolute
        height: 100px
        width: 100px
        top: -50px
        left: calc( 50% - 50px )
    &-title
      padding: 50px 16px 0 16px
      text-align: center
    &-content
      padding: 0 16px
</style>
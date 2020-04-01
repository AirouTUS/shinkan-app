<template lang="pug">
  div#page-circle.bg-default
    div.page-wrapper

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
        p.mt-3(v-if="circle.catchCopy") {{ circle.catchCopy }}
        
      div.circle-container.text-gray.bold
        p(v-if="circle.about")
          b-icon(icon="hand-point-right")
          span.ml-3 {{ circle.about }}
        p.pt-3(v-if="circle.location")
          b-icon(icon="thumbtack")
          span.ml-3 {{ circle.location }}
        p.pt-3(v-if="circle.workTime")
          b-icon(icon="clock")
          span.ml-3 {{ circle.workTime }}
        p.pt-3(v-if="circle.members_number")
          b-icon(icon="users")
          span.ml-3 {{ circle.members_number }}
        p.pt-3(v-if="circle.cost")
          b-icon(icon="dollar-sign")
          span.ml-3 {{ circle.cost }}

      div.circle-container(v-html="sanitize(circle.description)")
        p(v-html="sanitize(circle.description)")
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import CircleModel from '../models/CircleModel'

export default defineComponent({
  setup(props, {root}) {
    root.$ga.page(root.$route.fullPath)
    
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
  #page-circle
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
          background: linear-gradient(-135deg, #E4A972, #9941D8)
        > img
          border-radius: 100px
          object-fit: contain
    .circle-image
      width: 100%
      height: 300px
      background-color: $bg-default-color
      &.is-loading
        background: linear-gradient(-135deg, #E4A972, #9941D8)
      > img
        object-fit: cover
</style>

<style lang="sass" scoped>
  .action
    color: white
    border-radius: 100px
    background: rgba(0, 0, 0, 0.5)
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25)
  .page-wrapper
    padding-bottom: 40px
  .circle-container
    padding: 16px
  .circle
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
        left: calc( 50% - 60px )
    &-title
      padding: 60px 16px 16px 16px
      text-align: center
    &-content
      padding: 0 16px
</style>
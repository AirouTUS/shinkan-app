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
      div.circle-kind.flexbox.has-start.is-middle.pl-1
        div.category.flexbox.has-start.is-middle.mt-1.mr-1
          span#committee(v-if="circle.category.id === 1")
            b.is-size4.pt-1.pb-1.pr-2.pl-2 {{circle.category.name}}
          span#active(v-if="circle.category.id === 2")
            b.is-size4.pt-1.pb-1.pr-2.pl-2 {{circle.category.name}}
          span#culture(v-if="circle.category.id === 3")
            b.is-size4.pt-1.pb-1.pr-2.pl-2 {{circle.category.name}}
        span.mt-1.mr-1(v-for="(type, i) in circle.types.length > 0 ? circle.types : [{}]" :key="i")
          b.is-size4.pt-1.pb-1.pr-2.pl-2 {{type.name}}
      p.pt-3.is-size4 {{ circle.description }}
    //- div.circle-kind.flexbox.has-end.is-middle
    //-   div.category.flexbox.has-start.is-middle.mt-1.mr-1
    //-     span#committee(v-if="circle.category.id === 1")
    //-       b.is-size4.pt-1.pb-1.pr-2.pl-2 {{circle.category.name}}
    //-     span#active(v-if="circle.category.id === 2")
    //-       b.is-size4.pt-1.pb-1.pr-2.pl-2 {{circle.category.name}}
    //-     span#culture(v-if="circle.category.id === 3")
    //-       b.is-size4.pt-1.pb-1.pr-2.pl-2 {{circle.category.name}}
    //-   span.mt-1.mr-1(v-for="(type, i) in circle.types.length > 0 ? circle.types : [{}]" :key="i")
    //-     b.is-size4.pt-1.pb-1.pr-2.pl-2 {{type.name}}
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
      console.log(state.circle)
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
    .circle-content
        >div
          &.circle-kind
            >div
              >span
                color: white
                border-radius: 16px
                &#committee
                  background: rgb(73, 159, 32)
                &#active
                  background: rgb(211, 67, 40)
                &#culture
                  background: rgb(48, 106, 167)
            >span
              color: white
              border-radius: 16px
              background: #A8DC39
    
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
    &-kind
      padding: 0 16px
</style>
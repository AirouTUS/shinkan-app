<template lang="pug">
  div#circles-detail.page.bg-default
    template(v-if="circle && circle.name")
      div.circle-header.p-3.flexbox.has-space-between
        back-button
        share-button(:title="share.title" :text="share.text" :url="share.url")

      b-carousel.circle-images(:autoplay="true" :has-drag="true" :indicator="false")
        b-carousel-item(v-for="(image, i) in (circle.images && circle.images.length > 0) ? circle.images : [{}]" :key="i")
          v-img.circle-image(:src="image.url")

      div.circle-eyecatch
        v-img(:src="circle.eyecatch")
      div.circle-title.flexcolumn.is-middle
        h1.bold.is-size1.pt-3 {{ circle.name }}
        p.mt-3(v-if="circle.catchCopy") {{ circle.catchCopy }}
        div.flexbox.mt-3(v-if="circle.twitter || circle.email")
          a.sns-icon.mx-2(v-if="circle.twitter" :href="`https://twitter.com/${circle.twitter}`" target="_blank" rel="noopener noreferrer")
            img(src="/img/twitter.png")
          a.sns-icon.mx-2(v-if="circle.email" :href="`mailto:${circle.email}`")
            img(src="/img/envelope.png")
        
      div.page-content.text-gray.bold
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

      div.page-content(v-html="sanitize(circle.description)")
        p(v-html="sanitize(circle.description)")
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, PropType } from '@vue/composition-api'
import CircleModel from '@/models/CircleModel'
import { Circle } from '@/types'

import BackButton from '@/components/circle/BackButton.vue'
import ShareButton from '@/components/circle/ShareButton.vue'

type Props = {
  circle: Circle,
  loading: boolean
}

export default defineComponent({
  components: {BackButton, ShareButton},
  props: {
    circle: {
      type: Object as PropType<Circle>,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  setup(props: Props, {root, emit}) {
    const share = {
      title: "東京理科大学 WEB新歓",
      text: "東京理科大学 WEB新歓",
      url: location.href
    }

    return {
      root,
      share
    }
  }
})
</script>

<style lang="sass">
  #circles-detail
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
  .sns-icon
    width: 24px
    height: 24px
  .action
    color: white
    border-radius: 100px
    background: rgba(0, 0, 0, 0.5)
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25)

  .page
    padding-bottom: 80px
    &-content
      padding: 8px 16px 
      padding-bottom: 16px

  .circle
    position: relative
    &-header
      position: absolute
      z-index: 1
      width: 100%
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
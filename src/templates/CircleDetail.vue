<template lang="pug">
  div#circle-detail
    div.detail-images
      b-loading.images-loading(:active="!imageLoaded" :is-full-page="false")
      b-carousel(:autoplay="false" :has-drag="true")
        b-carousel-item
          v-img.item-image(@onLoaded="imageLoaded = true" src="https://pbs.twimg.com/media/ES_qmkgUYAIpopG?format=jpg&name=4096x4096")
        b-carousel-item
          v-img.item-image(src="https://pbs.twimg.com/media/ES_qmkgUYAIpopG?format=jpg&name=4096x4096")
        b-carousel-item
          v-img.item-image(src="https://pbs.twimg.com/media/ES_qmkgUYAIpopG?format=jpg&name=4096x4096")
    div.detail-description
      p {{  }}
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from '@vue/composition-api';
import { Circle } from '../types';

export default defineComponent({
  props: {
    circle: {
      type: Object as PropType<Circle>,
    }
  },
  setup(props: Circle) {
    const state = reactive({
      imageLoaded: false
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="sass" scoped>
  .detail-images
</style>

<style lang="sass">
  #circle-detail
    .images-loading
      margin-top: $header-nav-height
      height: 280px
    .indicator-item
      > .indicator-style
        background-color: $main-color
      &:not(.is-active)
        > .indicator-style
          border-color: $main-color
          background: white
    .item-image
      background: $bg-color
      height: 280px
      > img
        object-fit: contain
</style>
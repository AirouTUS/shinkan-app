<template lang="pug">
  div#comp-circle-row.comp-wrapper.flexbox.bg-white
    div.comp-wrapper-left
      v-img(:src="circle.eyecatch")
    div.comp-wrapper-right.flexcolumn.has-start
      div.flexbox.has-wrap.circle-tags(v-if="circle.types")
        div.mr-1.mt-1(v-for="type in circle.types")
          span.circle-type.is-size5.py-1.px-2.bg-gray.text-gray(:key="type.id") {{ type.name }}
      h2.bold.mt-2 {{ circle.name }}
      p.is-size4.text-gray(v-if="circle.catchCopy")
        b-icon(icon="hand-point-right")
        span {{ circle.about }}
      //- p.is-size5.text-gray.is-bottom {{ circle.catchCopy }}
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Circle } from '@/types'

type Props = {
  cirlce: Circle
}

export default defineComponent({
  props: {
    circle: {
      type: Object as PropType<Circle>
    }
  },
  setup(props: Props) {

  }
})
</script>

<style lang="sass">
  #comp-circle-row
    .v-img
      width: 80px
      height: 80px
      border-radius: 4px
      > img
        border-radius: 4px
        object-fit: cover
</style>

<style lang="sass" scoped>
  .comp
    &-wrapper
      padding: 8px
      &-right
        padding-left: 12px
  .circle-tags
      overflow: hidden
  .circle-type
    border-radius: 16px
</style>
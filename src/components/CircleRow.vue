<template lang="pug">
  div#component-circle-row.component-wrapper.flexbox.bg-white
    div.circle-image
      v-img(:src="circle.eyecatch")
    div.circle-info.flexcolumn.has-start
      h2.bold {{ circle.name }}
      p.is-size5.mt-1.gray(v-if="circle.catchCopy") {{ circle.catchCopy }}
      div.flexbox.has-wrap.mt-1(v-if="circle.types")
        div.mr-1.mb-1(v-for="type in circle.types")
          span.circle-type.bold.is-size5.pt-1.pb-1.pr-2.pl-2(:key="type.id") {{ type.name }}
      p.is-size5.gray.is-bottom
        b-icon(icon="hand-point-right")
        span {{ circle.about }}
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Circle } from '@/types';

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
  #component-circle-row
    .v-img
      border-radius: 4px
      > img
        border-radius: 4px
        object-fit: cover
</style>

<style lang="sass" scoped>
  .component-wrapper
    padding: 12px 
  .circle-image
    width: 80px
    height: 80px
    border-radius: 16px
  .circle-info
    padding-left: 12px
  .circle-type
    color: white
    border-radius: 16px
    background: $main-color
</style>
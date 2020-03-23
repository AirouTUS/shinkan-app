<template lang="pug">
  div.flexbox
    div.circle-image
    div.circle-info
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

<style lang="sass" scoped>
  .circle-image
  .circle-info
</style>
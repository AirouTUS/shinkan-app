<template lang="pug">
  nav {{ circle.name }}
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Circle } from '../types';

type Props = {
  circle: Circle
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
  nav
    position: fixed
    top: 0
    width: 100%
    height: $header-nav-height
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1)
    background: white
</style>
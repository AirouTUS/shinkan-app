<template lang="pug">
  nav#circle-header.flexbox.has-space-between
    div.space-icon
      b-icon(icon="chevron-left" @click.native="root.$router.go(-1)")
    div.space-name.flexcolumn.has-space-between(v-if="!loading")
      h1.bold {{ circle.name }}
      h2 {{ circle.category.name }}
    div.space-none-icon
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
      type: Object as PropType<Circle>,
    },
    loading: {
      type: Boolean
    }
  },
  setup(props: Props, {root}) {
    return {
      root
    }
  }
})
</script>

<style lang="sass">
  #circle-header
    .space-icon
      color: $main-color
    .space-name
      align-items: center
      > h1
      > h2
        font-size: $text-mini
        color: $text-gray
    .space-none-icon
      width: 24px
      height: 24px
</style>

<style lang="sass" scoped>
  nav
    position: fixed
    top: 0
    width: 100%
    height: $header-nav-height
    padding: 0 24px
    align-items: center
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .1)
    background: white
</style>
<template lang="pug">
  div.category-navtag.flexbox
    div.category-navtag-item.flexbox(:class="customClass")
      b-icon(:icon="icon")
      span.name.bold {{ category.name }}
      b-icon.mini-icon(icon="chevron-right")
</template>

<script lang="ts">
import { Category } from '../types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<Category>
    },
    customClass: {
      type: String
    },
    icon: {
      type: String
    }
  }
})
</script>

<style lang="sass">
  .category-navtag
    &-item
      .icon
        font-size: 20px
      .mini-icon
        font-size: 12px
</style>

<style lang="sass" scoped>
  .category-navtag
    &-item
      padding: 10px 24px
      align-items: center
      color: white
      border-radius: 8px
      background: $loading-color
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)
      .name
        font-size: $text-large
        margin-left: 16px
        margin-right: 8px
</style>
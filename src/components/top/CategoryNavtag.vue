<template lang="pug">
  div.category-navtag.flexbox
    div.category-navtag-item.flexbox(:style="customStyle")
      b-icon(:icon="icon")
      span.name.bold.ml-3.mr-3 {{ category.name }}
      b-icon(icon="chevron-right")
</template>

<script lang="ts">
import { Category } from '../types'
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<Category>
    },
    customStyle: {
      type: String
    },
    icon: {
      type: String
    }
  }
})
</script>

<style lang="sass" scoped>
  .category-navtag
    &-item
      padding: 8px 20px
      align-items: center
      color: white
      border-radius: 24px
      background: $loading-color
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)
</style>
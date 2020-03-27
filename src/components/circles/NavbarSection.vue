<template lang="pug">
  nav#category-navbar.category-navbar.flexbox.has-space-around
    template(v-for="category in categories")
      div.category-navbar-item.flexcolumn.is-middle.gray(@click="emit('navigation', category)" :class="{'is-active':category.id.toString() === categoryId }")
        b-icon(:icon="toIcon(category)")
        span.is-size5.bold.mt-2 {{ category.name }}
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, toRefs } from '@vue/composition-api'
import CategoryModel from '@/models/CategoryModel'
import { Category } from '@/types'
import CategoryComponent from '@/modules/category'

export default defineComponent({
  setup(props, ctx) {
    const {emit} = ctx
    const categoryComponent = CategoryComponent(ctx)
    categoryComponent.getList()
    return {
      ...categoryComponent,
      emit
    }
  }
})
</script>

<style lang="sass">
  #category-navbar
    .is-active
      > span
        color: $main-color
      > svg > path
        fill: $main-color
</style>

<style lang="sass" scoped>
  .category-navbar
    &-item
  .icon-wrapper
    border-radius: 8px
    .item-icon
</style>

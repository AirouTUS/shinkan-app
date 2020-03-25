<template lang="pug">
  nav#category-navbar.category-navbar.flexbox.has-space-around
    template(v-for="category in categories")
      router-link.category-navbar-item.flexcolumn.is-middle.gray(
          :to="{name: 'circles', query: {categoryId: category.id.toString()}}")
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
    const categoryComponent = CategoryComponent(ctx)
    categoryComponent.getList()
    return {
      ...categoryComponent
    }
  }
})
</script>

<style lang="sass">
  #category-navbar
    .router-link-exact-active
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

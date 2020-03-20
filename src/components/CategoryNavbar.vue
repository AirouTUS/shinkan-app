<template lang="pug">
  nav#category-navbar
    b-tabs(v-model="activeTab" position="is-centered")
      b-tab-item(v-for="category in categories" :key="category.id" :label="category.name" :value="5")
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, toRefs } from '@vue/composition-api'
import CategoryModel from '@/models/CategoryModel'
import { Category } from '@/types'

export default defineComponent({
  setup(props, {root, emit}) {
    const state = reactive({
      activeTab: 0
    })
    const categories = computed(() => root.$store.state.categories)
    watch(() => state.activeTab, (val: number) => {
      const nowCategoryIndex = categories.value.findIndex((category: Category, i: number) => i === val)
      if (nowCategoryIndex !== -1) {
        emit("navigation", categories.value[nowCategoryIndex])
      }
    })
    return {
      ...toRefs(state),
      categories
    }
  }
})
</script>

<style lang="sass">
  #category-navbar
    position: fixed
    top: 0
    width: 100%
    height: $header-nav-height
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1)
    background: white
    > .b-tabs > .tabs
      height: $header-nav-height
      > ul
        color: $text-gray
        border: none
        > li 
          > a
            color: $text-gray
            border: none
            &:hover
              color: $main-color
              border-bottom: solid 2px $main-color
          &.is-active
            > a
              color: $main-color
              border-bottom: 2px solid $main-color
</style>
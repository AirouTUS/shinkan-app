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

    let categoriesLoaded = false
    const init = () => {
      const categoryId = root.$route.query.categoryId ? Number(root.$route.query.categoryId) : NaN
      // console.log("[CategoryNavbar-init(phase1)]: ", "[categoryId]: ", categoryId)

      const finishInitWatcher = watch(categories, () => {
        // console.log("[CategoryNavbar-init(phase2)]: ", "[categories length]: ", categories.value.length)
        if (categories.value.length === 0) return
        // watch stopper isn't maked untill finishing first watch progress
        if (finishInitWatcher) finishInitWatcher()
        categoriesLoaded = true
        const categoryIndex = categories.value.findIndex((category: Category) => category.id === categoryId)
        // console.log("[CategoryNavbar-init(phase3)]: ", "[categoryIndex]: ", categoryIndex)
        if (categoryIndex !== -1) state.activeTab = categoryIndex
      })
    }
    init()

    watch(() => state.activeTab, (tab: number) => {
      // console.log("[CategoryNavbar-Watch(state.activeTab)(phase1)]: ")
      if (!categoriesLoaded) return

      const categoryId = root.$route.query.categoryId ? Number(root.$route.query.categoryId) : NaN
      const category = categories.value[tab]
      if (categoryId === category.id) return console.warn("[CategoryNavbar]: ", "validate duplicated navigation ", "(always occurred when first rendering)")
      // console.log("[CategoryNavbar-Watch(state.activeTab)(phase2)]")
      emit("navigation", category)
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
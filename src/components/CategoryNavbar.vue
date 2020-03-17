<template lang="pug">
  nav#category-navbar
    b-tabs(v-model="activeTab" position="is-centered")
      b-tab-item(v-for="category in categories" :key="category.id" :label="category.name")
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryModel from '@/models/CategoryModel'
import { Category } from '@/types'

export default Vue.extend({
  data() {
    return {
      categories: [] as Category[],
      activeTab: 0
    }
  },
  created() {
    new CategoryModel().getList().then(res => {
      this.categories = res.data.categories as Category[]
    })
  },
  watch: {
    activeTab(val: number) {
      const nowCategoryIndex = this.categories.findIndex((category, i) => i === val)
      if (nowCategoryIndex !== -1) {
        this.$emit("navigation", this.categories[nowCategoryIndex])
      }
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
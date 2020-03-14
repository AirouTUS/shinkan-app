<template lang="pug">
  div#category-nav
    nav
      b-tabs(v-model="activeTab" position="is-centered")
        b-tab-item(v-for="category in categories" :key="category.id" :label="category.name")
</template>

<script lang="ts">
import Vue from 'vue'
import CircleCategoryModel from '@/models/CircleCategoryModel'
import { Category } from '@/types'

export default Vue.extend({
  data() {
    return {
      categories: [] as Category[],
      activeTab: 0
    }
  },
  created() {
    new CircleCategoryModel().get().then(res => {
      this.categories = res.data.categories as Category[]
    })
  },
  watch: {
    activeTab(val: number) {
      const nowCategoryIndex = this.categories.findIndex((category, i) => i === val)
      const query = Object.assign({}, this.$route.query, {category: this.categories[nowCategoryIndex].id})
      this.$router.push({query})
      this.$emit("navigation")
    }
  }
})
</script>

<style lang="sass">
  #category-nav
    nav
      position: fixed
      top: 0
      width: 100%
      height: $header-nav-height
      background: white
      z-index: 9
      > .b-tabs > .tabs
        > ul
          color: $text-gray
          > li 
            > a
              color: $text-gray
              &:hover
                color: $main-color
                border-color: $main-color
            &.is-active
              > a
                color: $main-color
                border-bottom: 2px solid $main-color
</style>
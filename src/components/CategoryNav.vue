<template lang="pug">
  div#category-nav
    nav
      b-tabs(v-model="activeTab" position="is-centered")
        b-tab-item(v-for="category in categories" :key="category.id" :label="category.name")
</template>

<script lang="ts">
import Vue from 'vue'

type Category = {
  id: number,
  name: string
}
type Tab = {
  tab: number
}

const categories = [
  {
    id: 1,
    name: '運動サークル'
  }, {
    id: 2,
    name: '文化サークル'
  }
] as (Category & Tab)[] 

export default Vue.extend({
  data() {
    return {
      categories,
      activeTab: 0
    }
  },
  watch: {
    activeTab(val: number) {
      const nowCategoryIndex = this.categories.findIndex((category, i) => i === val)
      const query = Object.assign({}, this.$route.query, {category: this.categories[nowCategoryIndex].id})
      this.$router.push({query})
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
            &.is-active
              > a
                color: $main-color
                border-bottom: 2px solid $main-color
</style>
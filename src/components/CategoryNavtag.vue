<template lang="pug">
  div.category-navtag.flexbox
    router-link.category-navtag-item.flexbox(to="/")
      b-icon(icon="running")
      span.name 運動サークル
      b-icon.mini-icon(icon="chevron-right")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
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
      border-radius: 100px
      background-color: $tag-orange
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25)
      .name
        margin-left: 16px
        margin-right: 8px
</style>
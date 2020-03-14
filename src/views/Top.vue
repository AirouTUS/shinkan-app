<template lang="pug">
  div#top
    top-section
    circle-category-nav(link="/circles" iconName="running" categoryTitle="運動サークル" backgroundColor="orange")
    circle-category-nav(link="/circles" iconName="running" categoryTitle="文化サークル" backgroundColor="blue")
    circle-list-section
</template>

<script lang="ts">
import Vue from 'vue'
import CircleListSection from '@/components/top/CircleListSection.vue'
import TopSection from '@/components/top/TopSection.vue'
import CircleCategoryNav from '@/components/CircleCategoryNav.vue'
export default Vue.extend({
  components: { CircleListSection, TopSection, CircleCategoryNav }
})
</script>

<style lang="sass">
  #top
</style>
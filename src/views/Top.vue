<template lang="pug">
  div#top top
    top-section
    circle-list-section
</template>

<script lang="ts">
import Vue from 'vue'
import CircleListSection from '@/components/top/CircleListSection.vue'
import TopSection from '@/components/top/TopSection.vue'
export default Vue.extend({
  components: { CircleListSection, TopSection }
})
</script>

<style lang="sass">
  #top
</style>
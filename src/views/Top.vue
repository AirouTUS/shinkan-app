<template lang="pug">
  div#top
    top-section.page-section
    circle-list-section.page-section
</template>

<script lang="ts">
import Vue from 'vue'
import TopSection from '@/components/top/TopSection.vue'
import CircleListSection from '@/components/top/CircleListSection.vue'

export default Vue.extend({
  components: { CircleListSection, TopSection }
})
</script>

<style lang="sass">
  #top
</style>
<style lang="sass" scoped>
  #top
    .page-section
      margin-bottom: 28px
</style>
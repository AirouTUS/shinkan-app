<template lang="pug">
  div#top top
    circle-list-section
</template>

<script lang="ts">
import Vue from 'vue'
import CircleListSection from '@/components/top/CircleListSection.vue'
export default Vue.extend({
  
  components: { CircleListSection }
})
</script>

<style lang="sass">
  #top
</style>
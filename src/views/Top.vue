<template lang="pug">
  div#top
    top-section.page-section
    circle-list-section.page-section
</template>

<script lang="ts">
import Vue from 'vue'
import router from '@/router'
import store from '@/store/index'

import TopSection from '@/components/Top/TopSection.vue'
import CircleListSection from '@/components/Top/CircleListSection.vue'

export default Vue.extend({
  components: { CircleListSection, TopSection },
  mounted() {
  }
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
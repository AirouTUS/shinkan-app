<template lang="pug">
  div#top
    div.top-header
      div.flexbox.is-middle
        span.top-header-icon
        p.bold.is-size1 東京理科大学WEB新歓
    circle-list-section.page-section
</template>

<script lang="ts">
import Vue from 'vue'
import router from '@/router'
import store from '@/store/index'

import CircleListSection from '@/components/top/CircleListSection.vue'

export default Vue.extend({
  components: { CircleListSection },
  methods: {
    track() {
      this.$ga.page('/')
    }
  }
})
</script>
<style lang="sass" scoped>
  .top-header-icon 
    width: 40px
    height: 40px
    margin-right: 8px
    background: url("/svg/TusIcon.svg")
  .top-header
    padding: 20px
    letter-spacing: 0.1rem
  .page-section
    padding: 0 20px
</style>
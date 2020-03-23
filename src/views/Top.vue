<template lang="pug">
  div#top
    div.top-header
      div.flexbox.is-middle
        tus-icon.top-header-icon
        p.bold.is-size1 東京理科大学WEB新歓
    circle-list-section.page-section
</template>

<script lang="ts">
import Vue from 'vue'
import router from '@/router'
import store from '@/store/index'

import TopSection from '@/components/top/TopSection.vue'
// import CategoryListSection from '@/components/CategoryListSection.vue'
import CircleListSection from '@/components/top/CircleListSection.vue'
import TusIcon from '@/components/svg/TusIcon.vue'

export default Vue.extend({
  components: { CircleListSection, TopSection, TusIcon },
})
</script>

<style lang="sass">
  #top
    .top-header-icon 
      width: 40px
      margin-right: 8px
      > path
        fill: rgb(74, 74, 74)
</style>
<style lang="sass" scoped>
  .top-header
    padding: 24px
    letter-spacing: 0.1rem
</style>
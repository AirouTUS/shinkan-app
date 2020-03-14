<template lang="pug">
  div#circles circles
    category-nav
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryNav from '@/components/CategoryNav.vue'

export default Vue.extend({
  components: { CategoryNav }
})
</script>

<style lang="sass">
  #circles
    margin-top: $header-nav-height
</style>
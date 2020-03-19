<template lang="pug">
  div#index
    transition(name="slide-fade-reverse" mode="out-in")
      router-view.spacer
    footer-nav
</template>

<script lang="ts">
import Vue from 'vue'
import FooterNav from '@/components/FooterNav.vue'
export default Vue.extend({
  components:{FooterNav},
  beforeCreate() {
    this.$store.dispatch('getCategories')
  }
})
</script>

<style lang="sass">
  #index
  .spacer
    padding-bottom: 55px
</style>

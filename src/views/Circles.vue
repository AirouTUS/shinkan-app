<template lang="pug">
  div#circles
    category-nav(@navigation="navigationHandler")
    transition-group.circle-list(name="slide-fade" mode="out-in" tag="div")
      template(v-for="circle in circles")
        circle-card.circle-list-card(:circle="circle" :key="circle.id" )
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryNav from '@/components/CategoryNav.vue'
import CircleCard from '@/components/CircleCard.vue'
import CircleModel from '@/models/CircleModel'
import { Circle } from '@/types'

export default Vue.extend({
  components: { CategoryNav, CircleCard },
  data() {
    return {
      circles: [] as Circle[]
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      new CircleModel().getList().then(res => {
        this.circles = res.data.circles
      })
    },
    navigationHandler() {
      this.circles = []
      setTimeout(this.init, 500)
    }
  }
})
</script>

<style lang="sass">
  #circles
    padding-top: $header-nav-height
    .circle-list
      padding: 0 24px
      &-card
        width: 100%
        padding-bottom: 12px
</style>
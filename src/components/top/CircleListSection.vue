<template lang="pug">
  div#circle-list
    template(v-for="category in ($store.state.categories.length ? $store.state.categories : 3)")
      category-navtag(customClass="red").category-label
      div.circles
        template(v-for="circle in (circles.length ? circles : [{},{},{}])")
          circle-card.item(:key="circle.id" @click.native.once="showDetail(circle)" :circle="circle" customClass="circle-icon")
</template>

<script lang="ts">
import Vue from 'vue'
import CircleModel from '@/models/CircleModel'
import { Circle } from '@/types'

import CategoryNavtag from '@/components/CategoryNavtag.vue'
import CircleCard from '@/components/CircleCard.vue'

export default Vue.extend({
  components: { CategoryNavtag, CircleCard },
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
      setTimeout(() => {
      new CircleModel().getList().then(res => {
        this.circles = res.data.circles
      })
      }, 1000)

    },
    showDetail(circle: Circle) {
      if (circle.id === undefined) return
      this.$router.push({name: 'circleDetail', params: {id: circle.id.toString()}})
    }
  }
})
</script>

<style lang="sass">
  #circle-list
    .yellow
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #FEC81A
    .blue
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #306AA7
    .red
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #E73D1D
</style>

<style lang="sass" scoped>
  #circle-list
    padding-top: 32px
    .category-label
      padding: 8px 24px
      overflow-x: auto
      white-space: nowrap
      -webkit-overflow-scrolling: touch
    .circles
      padding: 16px 24px 32px
      overflow-x: auto
      white-space: nowrap
      -webkit-overflow-scrolling: touch
      /* IE, Edge 対応 */
      -ms-overflow-style: none
      /* Firefox 対応 */
      scrollbar-width: none
      &::-webkit-scrollbar
        /* Chrome, Safari 対応 */
        display:none
        -webkit-appearance: none
      .item
        display: inline-block
        width: 280px
        overflow: hidden
        margin-right: 32px
</style>
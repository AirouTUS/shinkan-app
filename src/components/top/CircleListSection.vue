<template lang="pug">
  div#circle-list
    category-navtag.category-label
    div.circles
      template(v-for="circle in circles")
        div.item(:key="circle.id" @click="showDetail(circle)")
          circle-card(:circle="circle")
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
      new CircleModel().getList().then(res => {
        this.circles = res.data.circles
      })
    },
    showDetail(circle: Circle) {
      this.$router.push({name: 'circleDetail', params: {id: circle.id.toString()}})
    }
  }
})
</script>

<style lang="sass" scoped>
  #circle-list
    .category-label
      padding: 0 0 20px 20px
      overflow-x: auto
      white-space: nowrap
      -webkit-overflow-scrolling: touch
    .circles
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
        width: 60%
        overflow: hidden
        margin: 0 20px
</style>
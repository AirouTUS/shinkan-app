<template lang="pug">
  div#circle-list
    template(v-for="category in (categories.length ? categories : [{},{},{}])")
      category-navtag.category-label(@click.native.once="navigateToCircles" :customClass="selectColor(category.name)" :category="category" :key="category.id")
      div.circles
        template(v-for="circle in (circles.length ? circles : [{},{},{}])")
          circle-card.item(:key="circle.id" @click.native.once="navigateToCircle" :circle="circle" customClass="circle-icon")
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import CircleComponent from '@/modules/circle'
import { Circle } from '@/types'

import CategoryNavtag from '@/components/CategoryNavtag.vue'
import CircleCard from '@/components/CircleCard.vue'

const selectColor = (name: string) => {
  const color = {
    "委員会": "yellow",
    "文化系": "blue",
    "体育会系": "red"
  }
  return color[name]
}

export default defineComponent({
  components: { CategoryNavtag, CircleCard },
  setup(_, ctx) {
    const circleComponent = CircleComponent(ctx)
    const categories = computed(() => ctx.root.$store.state.categories)
    circleComponent.getList()
    return {
      ...circleComponent,
      categories,
      selectColor
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
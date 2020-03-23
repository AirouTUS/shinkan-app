<template lang="pug">
  div#circle-list
    template(v-for="category in (categories.length ? categories : [{},{},{}])")
      category-navtag.category-label(@click.native="onClickCategoryTag(category)" :customClass="selectColor(category.name).color" :icon="selectColor(category.name).icon" :category="category" :key="category.id")
      div.circles.x-scroll.non-scrollbar
        template(v-for="circle in ( (circlesByCategories[category.name] && circlesByCategories[category.name].length) ? circlesByCategories[category.name] : [{},{},{}])")
          circle-card-mini.item(:key="circle.id" @click.native="onClickCircle(circle)" :circle="circle" customClass="circle-icon")
</template>

<script lang="ts">
import { defineComponent, computed, watch, reactive, toRefs } from '@vue/composition-api'
import CircleComponent from '@/modules/circle'
import CircleModel from '@/models/CircleModel'
import { Circle, Category } from '@/types'

import CategoryNavtag from '@/components/CategoryNavtag.vue'
import CircleCardMini from '@/components/CircleCardMini.vue'

const selectColor = (name: string) => {
  let res = {color: "", icon: ""}
  switch (name) {
    case "委員会":
      res.color = "yellow"
      res.icon = "hands-helping"
      break;
    case "文化系":
      res.color = "blue"
      res.icon = "microscope"
      break;
    case "体育会系":
      res.color = "red"
      res.icon = "running"
      break;
    default:
      break;
  }
  return res
}


export default defineComponent({
  components: { CategoryNavtag, CircleCardMini },
  setup(_, ctx) {
    const circleComponent = CircleComponent(ctx)
    const categories = computed(() => ctx.root.$store.state.categories)
    const state = reactive({
      circlesByCategories: {} as any
    })
    const finishInitWatcher = watch(categories, () => {
      if (categories.value.length === 0) return
      if (finishInitWatcher) finishInitWatcher()
      categories.value.forEach((cat: Category) => {
        new CircleModel().getList({start: 0, end: 9, categoryId: cat.id}).then((res) => {
          const circles = {} as any
          circles[cat.name] = res.data.circles
          state.circlesByCategories = Object.assign({}, state.circlesByCategories, circles)
          // state.circlesByCategories[cat.name] = res.data.circles
          // state = reactive(state)
        })
      })
    })
    circleComponent.getList()

    const onClickCircle = (circle: Circle) => {
      if (!circle.id) return console.warn("[CircleListSectin]: ", "予期しないサークル個別への推移")
      circleComponent.navigateToCircle(circle.id.toString())
    }
    const onClickCategoryTag = (category: Category) => {
      circleComponent.navigateToCircles(category.id.toString())
    }

    return {
      ...circleComponent,
      categories,
      selectColor,
      onClickCircle, onClickCategoryTag,
      ...toRefs(state)
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
    .circles
      padding: 16px 24px 32px
      .item
        width: 120px
        overflow: hidden
        margin-right: 12px
</style>
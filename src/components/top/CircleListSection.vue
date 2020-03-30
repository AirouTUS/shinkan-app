<template lang="pug">
  div#circle-list
    template(v-for="category in (categories.length ? categories : [{},{},{}])")
      category-navtag.category-label(:category="category" :key="category.id"
                                      @click.native="onClickCategoryTag(category)" 
                                      :customStyle="toStyle(category)" 
                                      :icon="toIcon(category)")
      div.circles.x-scroll.non-scrollbar
        template(v-for="circle in ( (circlesByCategories[category.name] && circlesByCategories[category.name].length) ? circlesByCategories[category.name] : [{},{},{}])")
          circle-card-mini.item(:key="circle.id" @click.native="onClickCircle(circle)" :circle="circle" customClass="circle-icon")
</template>

<script lang="ts">
import { defineComponent, computed, watch, reactive, toRefs } from '@vue/composition-api'
import CircleComponent from '@/modules/circle'
import CategoryComponent from '@/modules/category'
import CircleModel from '@/models/CircleModel'
import { Circle, Category } from '@/types'

import CategoryNavtag from '@/components/CategoryNavtag.vue'
import CircleCardMini from '@/components/CircleCardMini.vue'


export default defineComponent({
  components: { CategoryNavtag, CircleCardMini },
  setup(_, ctx) {
    const categoryComponent = CategoryComponent(ctx)
    const circleComponent = CircleComponent(ctx)

    const categories = categoryComponent.categories
    const state = reactive({
      circlesByCategories: {} as any
    })

    categoryComponent.getList()

    const finishInitWatcher = watch(categoryComponent.listLoading, (loading) => {
      if (loading) return
      if (finishInitWatcher) finishInitWatcher()
      categories.value.forEach((cat: Category) => {
        new CircleModel().getList({start: 0, end: 9, categoryId: cat.id}).then((res) => {
          const circles = {} as any
          circles[cat.name] = res.data.circles
          state.circlesByCategories = Object.assign({}, state.circlesByCategories, circles)
        })
      })
    })

    const onClickCircle = (circle: Circle) => {
      if (!circle.id) return console.warn("[CircleListSectin]: ", "予期しないサークル個別への推移")
      circleComponent.navigateToCircle(circle.id.toString())
    }
    const onClickCategoryTag = (category: Category) => {
      circleComponent.navigateToCircles(category.id.toString())
    }

    return {
      ...circleComponent,
      ...categoryComponent,
      categories,
      onClickCircle, onClickCategoryTag,
      ...toRefs(state)
    }
  }  
})
</script>

<style lang="sass" scoped>
  #circle-list
    // padding-top: 16px
    .category-label
      padding: 8px 0
    .circles
      padding: 8px 0 12px
      .item
        width: 100px
        overflow: hidden
        margin-right: 12px
</style>
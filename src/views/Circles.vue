<template lang="pug">
  div#circles
    category-navbar(@navigation="navigationHandler")
    transition-group.circle-list(name="slide-fade" mode="out-in" tag="div")
      template(v-for="circle in circles")
        circle-card.circle-list-card(:key="circle.id" :circle="circle")
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onBeforeMount, computed } from '@vue/composition-api'
import CircleComponent from '@/modules/circle'
import { Circle, Category } from '@/types'

import CategoryNavbar from '@/components/CategoryNavbar.vue'
import CircleCard from '@/components/CircleCard.vue'
import CircleHeader from '@/components/CircleHeader.vue'
import CircleDetail from '@/templates/CircleDetail.vue'


export default defineComponent({
  components: { CategoryNavbar, CircleCard, CircleDetail, CircleHeader },
  setup(_ , ctx) {

    const circleComponent = CircleComponent(ctx)
    // const isDetail = computed(() => (typeof circleComponent.circleId.value !== "undefined"))

    watch(() => ctx.root.$route.fullPath, (val) => {
      // if (ctx.root.$route.name === 'circleDetail') circleComponent.get()
      circleComponent.categoryId.value = Number(ctx.root.$route.query.categoryId)
      circleComponent.reset()
      circleComponent.getList()
    })

    const navigationHandler = (category: Category) => {
      circleComponent.navigateToCircles(category.id.toString())
    }
    // const onClickCircle = (circle: Circle) => {
    //   circleComponent.navigateToCircle(circle.id.toString())
    // }

    return {
      ...circleComponent,
      navigationHandler,
    }
  }
})
</script>

<style lang="sass" scoped>
  #circles
    min-height: 100%
    padding-top: $header-nav-height
    .circle-list
      margin: 24px
      &-card
        width: 100%
        margin-bottom: 24px
        cursor: pointer
    .circles-circle-detail
</style>
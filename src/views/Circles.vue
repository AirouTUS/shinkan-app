<template lang="pug">
  div.bg-color#circles
    transition(name="header-slide-fade" mode="out-in")
      category-navbar(v-if="!isDetail" @navigation="navigationHandler")
    transition(name="header-slide-fade" mode="out-in")
      circle-header(v-if="isDetail" :circle="circle" :loading="loading")

    transition-group.circle-list(name="slide-fade" mode="out-in" tag="div" v-show="!isDetail")
      circle-card.circle-list-card(v-for="circle in circles" :key="circle.id" 
                                  @click.native="onClickCircle(circle)" :circle="circle")

    transition(name="slide-fade-reverse" mode="out-in")
      circle-detail.circles-circle-detail(v-if="isDetail" :circle="circle" :loading="loading")
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
    const isDetail = computed(() => (typeof circleComponent.circleId.value !== "undefined"))

    watch(() => ctx.root.$route.fullPath, (val) => {
      if (ctx.root.$route.name === 'circleDetail') circleComponent.get()
      circleComponent.reset()
      circleComponent.getList()
    })

    const navigationHandler = (category: Category) => {
      circleComponent.navigateToCircles(category.id.toString())
    }
    const onClickCircle = (circle: Circle) => {
      circleComponent.navigateToCircle(circle.id.toString())
    }

    return {
      ...circleComponent, isDetail,
      navigationHandler, onClickCircle
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
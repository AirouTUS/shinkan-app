<template lang="pug">
  div.page#circles-index
    div.circles-list(:class="{'is-clipped': isDetail}")
      navbar-section.circles-navbar(@navigation="navigationHandler")
      div.circle-list
        template(v-for="c in circles")
          circle-card.circle-list-item(:key="c.id" :circle="c" @click.native="onClickCircle(c)")
      v-infinite-loading(@infinite="infiniteHandler" :identifier="identifier")

    transition(name="slide-fade-reverse" mode="out-in")
      circles-detail.circles-detail(v-if="isDetail" :circle="circle" :loading="loading")
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onBeforeMount, computed, onMounted, ref } from '@vue/composition-api'
import CircleComponent from '@/modules/circle'
import { Circle, Category } from '@/types'

import CirclesDetail from './Detail.vue'

import NavbarSection from '@/components/circles/NavbarSection.vue'
import CircleCard from '@/components/circles/CircleCard.vue'

export default defineComponent({
  components: { NavbarSection, CircleCard, CirclesDetail },
  setup(_ , ctx) {

    const circleComponent = CircleComponent(ctx)
    const circleId = circleComponent.circleId
    const circles = circleComponent.circles
    const isDetail = computed(() => (typeof circleComponent.circleId.value !== "undefined"))
    const forceUpdate = ref(false)

    const route = computed(() => ctx.root.$route)

    watch(route, (to, from) => {
      ctx.root.$ga.page(ctx.root.$route.fullPath)
      // カテゴリ間の推移
      if (from && from.name === "circlesIndex" && to.name === "circlesIndex") {
        circleComponent.reset()
      }
    })

    watch(() => ctx.root.$route.path, () => {
      if (circleId.value) {
        document.documentElement.classList.add('is-clipped')
        circleComponent.get()
      } else {
        document.documentElement.classList.remove('is-clipped')
      }
    })



    const navigationHandler = (category: Category) => {
      if (Number(circleComponent.categoryId.value) === category.id) return ctx.root.$router.push({path: '/circles'})
      circleComponent.navigateToCircles(category.id.toString())
    }
    const onClickCircle = (circle: Circle) => {
      circleComponent.navigateToCircle(circle.id.toString())
    }
    return {
      isDetail,
      ...circleComponent,
      navigationHandler, onClickCircle,
    }
  }
})
</script>

<style lang="sass" scoped>
  .circles-list
    padding-top: 16px
  .circles-detail
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    overflow-y: auto
  .page
    min-height: 100%
    .circles-navbar
      margin: 16px
    .circle-list
      margin: 16px
      &-item
        margin-bottom: 12px
        border-radius: 8px
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25)
        cursor: pointer
</style>
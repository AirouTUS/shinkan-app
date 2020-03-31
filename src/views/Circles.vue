<template lang="pug">
  div#circles
    navbar-section.circles-navbar(@navigation="navigationHandler")
    div.circle-list
      template(v-for="circle in circles")
        circle-row.circle-list-item(:key="circle.id" :circle="circle" @click.native="onClickCircle(circle)")
        circle-detail(v-if="Number(circleId) === circle.id")
    v-infinite-loading(@infinite="infiniteHandler" :identifier="identifier")
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onBeforeMount, computed, onMounted } from '@vue/composition-api'
import CircleComponent from '@/modules/circle'
import { Circle, Category } from '@/types'

import NavbarSection from '@/components/circles/NavbarSection.vue'
import CircleRow from '@/components/CircleRow.vue'
import CircleHeader from '@/components/CircleHeader.vue'
import CircleDetail from '@/templates/CircleDetail.vue'


export default defineComponent({
  components: { NavbarSection, CircleDetail, CircleHeader, CircleRow },
  setup(_ , ctx) {

    const circleComponent = CircleComponent(ctx)
    const isDetail = computed(() => (typeof circleComponent.circleId.value !== "undefined"))

    watch(() => ctx.root.$route.fullPath, (val) => {
      if (ctx.root.$route.name === 'circleDetail') return
      circleComponent.reset()
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
      navigationHandler, onClickCircle
    }
  }
})
</script>

<style lang="sass" scoped>
  #circles
    min-height: 100%
    padding-top: 16px
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
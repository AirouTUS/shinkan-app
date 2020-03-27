<template lang="pug">
  div(v-else)#circles
    navbar-section.circles-navbar(@navigation="navigationHandler")
    b-loading(:active="listLoading")
    transition-group.circle-list(tag="div" name="slide-fade" mode="out-in")
      template(v-for="circle in circles")
        //- circle-card.circle-list-card(:key="circle.id" :circle="circle")
        circle-row.circle-list-item(:key="circle.id" :circle="circle" @click.native="onClickCircle(circle)")
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
    const onClickCircle = (circle: Circle) => {
      circleComponent.navigateToCircle(circle.id.toString())
    }

    return {
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
        cursor: pointer
</style>
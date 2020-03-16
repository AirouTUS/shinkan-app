<template lang="pug">
  div#circles
    transition(name="header-slide-fade" mode="out-in")
      category-navbar(v-show="!isDetail" @navigation="navigationHandler")
    transition(name="header-slide-fade" mode="out-in")
      circle-header(v-if="isDetail" :circle="selectedCircle")
      
    transition-group.content.circle-list(name="slide-fade" mode="out-in" tag="div" v-show="!isDetail")
      div.circle-list-card(v-for="circle in circles" :key="circle.id" @click="showDetail(circle)")
        circle-card(:circle="circle")

    transition.content(name="slide-fade-reverse" mode="out-in")
      circle-detail(v-if="isDetail")
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive, toRefs, watch, onBeforeMount } from '@vue/composition-api'
import CircleModel from '@/models/CircleModel'
import { Circle, Category } from '@/types'

import CategoryNavbar from '@/components/CategoryNavbar.vue'
import CircleCard from '@/components/CircleCard.vue'
import CircleHeader from '@/components/CircleHeader.vue'
import CircleDetail from '@/templates/CircleDetail.vue'


export default defineComponent({
  components: { CategoryNavbar, CircleCard, CircleDetail, CircleHeader },
  setup(_ , {root}) {
    const state = reactive({
      circles: [] as Circle[],
      isDetail: false,
      selectedCircle: {} as Circle
    })

    const setCircleById = (id: number) => {
      state.selectedCircle = state.circles[id]
      state.isDetail = true
    }
    const init = () => {
      new CircleModel().getList().then(res => {
        state.circles = res.data.circles
        const id = Number(root.$route.params.id)
        if ( !isNaN(id) ) setCircleById(id)
      })
    }
    init ()

    const showDetail = (circle: Circle) => {
      root.$router.push({name: 'circleDetail', params: {id: circle.id.toString()}})
    }

    const navigationHandler = (category: Category) => {
      const query = Object.assign({}, root.$route.query, {category: category.id})
      root.$router.push({name: 'circles', query})
      state.circles = []
      setTimeout(init, 200)
    }

    watch(() => root.$route.params.id, () => {
      const id = Number(root.$route.params.id)
      if ( state.circles.length > 0 && !isNaN(id) ) return setCircleById(id)
      state.isDetail = false
    })

    return {
      ...toRefs(state),
      navigationHandler,
      showDetail,
    }
  }
})
</script>

<style lang="sass">
  #circles
    padding-top: $header-nav-height
    .content
      margin: 0 24px
    .circle-list
      padding: 24px 0
      &-card
        width: 100%
        padding-bottom: 24px
        cursor: pointer
</style>
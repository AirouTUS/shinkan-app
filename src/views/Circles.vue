<template lang="pug">
  div#circles
    transition(name="header-slide-fade" mode="out-in")
      category-navbar(v-show="!isDetail" @navigation="navigationHandler")
    transition(name="header-slide-fade" mode="out-in")
      circle-header(v-show="isDetail")
    transition-group.circle-list(name="slide-fade" mode="out-in" tag="div" v-show="!isDetail")
      div.circle-list-card(v-for="circle in circles" :key="circle.id" @click="showDetail(circle)")
        circle-card(:circle="circle")
    transition(name="slide-fade-reverse" mode="out-in")
      circle-detail(v-show="isDetail")
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, reactive, toRefs, watch } from '@vue/composition-api'
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
      isDetail: false
    })

    const init = () => {
      new CircleModel().getList().then(res => {
        state.circles = res.data.circles
      })
    }
    const navigationHandler = (category: Category) => {
      const query = Object.assign({}, root.$route.query, {category: category.id})
      root.$router.push({name: 'circles', query})
      state.circles = []
      setTimeout(init, 200)
    }
    const showDetail = (circle: Circle) => {
      root.$router.push({name: 'circleDetail', params: {id: circle.id.toString()}})
    }

    watch(() => root.$route.params.id, (val) => {
      if (val !== undefined) return state.isDetail = true
      state.isDetail = false
    })

    init()

    return {
      ...toRefs(state),
      navigationHandler,
      showDetail
    }
  }
})
</script>

<style lang="sass">
  #circles
    padding-top: $header-nav-height
    .circle-list
      padding: 24px 24px 0 24px
      &-card
        width: 100%
        padding-bottom: 24px
        cursor: pointer
</style>
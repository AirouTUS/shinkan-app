<template lang="pug">
  div#wrapper
    div#footer-nav
      router-link#top-icon(to="/")
        img(src="@/assets/svg/CircleTop.svg")
        p TUS新歓
      router-link#list-icon(to="/circles")
        router-link(to="/circles")
        img(src="@/assets/svg/CircleList.svg")
        div#kuuhaku
          p サークル一覧
</template>

<script lang="ts">
import Vue from "vue"
export type DataType = {
    pageName: string
}
export default Vue.extend({
    data(): DataType {
      return {
        pageName:'top'
      }
    },
    methods: {
      changePage(page:string):void{
      }
    }
})
</script>

<style lang="sass" scoped>
  #wrapper
    position: fixed
    bottom: 0
  #footer-nav 
    display: -webkit-flex
    display: flex
    align-items: stretch
    position:fixed
    font-family: Hiragino Kaku Gothic ProN
    bottom: 0
    background: white
    width: 100vw
    box-sizing: border-box
    border-top: 1px solid gainsboro
  #top-icon
    text-align: center
    font-size: 12px
    margin-left: 24px
  #list-icon
    text-align: center
    font-size: 12px
    margin-left: 19px
    margin-top: 3px
  #kuuhaku
    margin-top: 7px
</style>
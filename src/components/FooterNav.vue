<template lang="pug">
  div#wrapper
    div#footer-nav
      div#top-icon
        img(src="@/assets/svg/CircleTop.svg")
        p TUS新歓
      div#list-icon
        img(src="@/assets/svg/CircleList.svg")
        div#kuuhaku
          p サークル一覧
</template>

<script lang="ts">
export default {

}
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
    color: #BBBBBB
    text-align: center
    font-size: 12px
    margin-left: 24px
  #list-icon
    color: #A8DC39
    text-align: center
    font-size: 12px
    margin-left: 19px
    margin-top: 3px
  #kuuhaku
    margin-top: 7px
</style>
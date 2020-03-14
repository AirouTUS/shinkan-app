<template lang="pug">
  div#footer-nav
    div(:class="{ active: pageName==='top' }" @click="changePage('top')") ページ1
    div(:class="{ active: pageName==='circles' }" @click="changePage('circles')") ページ2
    img(src="@/assets/svg/CircleList.svg")
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
        alert(page)
        this.pageName=page
        console.log(`${location.host}/${page}`)
        // window.location.href=`${location.hostname} /${page}`
      }
    }
})
</script>

<style lang="sass" scoped>
  #footer-nav
    img
      fill: red
    
</style>
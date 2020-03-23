<template lang="pug">
  div#circle {{ circle }}
</template>

<script>
import Vue from 'vue'
import CircleModel from '../models/CircleModel'
export default Vue.extend({
  data() {
    return {
      circle: {}
    }
  },
  created() {
    const circleId = this.$route.params.circleId
    new CircleModel().get(circleId).then(res => {
      this.circle = res.data
    })
  }
})
</script>

<style lang="sass" scoped>
  #circle
    overflow: hidden
</style>
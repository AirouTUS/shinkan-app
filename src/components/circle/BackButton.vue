<template lang="pug">
  div.comp.p-2(@click="root.$router.go(-1)")
    b-icon(icon="chevron-left")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup(props, {root}) {
    return {
      root
    }
  }
})
</script>

<style lang="sass" scoped>
  .comp
    color: white
    border-radius: 100px
    background: rgba(0, 0, 0, 0.5)
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25)
</style>
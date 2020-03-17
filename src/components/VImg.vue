<template lang="pug">
  div.v-img
    img(:src="src" @load="onLoad" v-show="loaded")
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

type Props = {
  src: string
}
const props = {
  src: {
    type: String,
    required: true
  }
}

export default defineComponent({
  props,
  setup(props: Props, { root, emit }) {
    const state = reactive({
      loaded: false
    })
    const onLoad = () => {
      state.loaded = true
      emit('onLoaded')
    }
    return {
      ...toRefs(state),
      onLoad
    }
  }
})
</script>

<style lang="sass" scoped>
  .v-img
    background-color: #F4F4F4
    > img
      width: 100%
      height: 100%
</style>
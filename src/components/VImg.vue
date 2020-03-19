<template lang="pug">
  div.v-img(:class="{'is-loaded': loaded}")
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
    // default: 'https://pbs.twimg.com/media/EQLALdyU0AAX6fd?format=jpg&name=4096x4096'
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
    background-color: $loading-color
    &.is-loaded
      background-color: white
    > img
      width: 100%
      height: 100%
</style>
<template lang="pug">
  div.v-img(:class="{'is-loading': loading}")
    img(:src="src" @load="onLoad" v-show="!loading")
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
      loading: true
    })
    const onLoad = () => {
      state.loading = false
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
    width: 100%
    height: 100%
    background-color: white
    &.is-loading
      background-color: $loading-color
    > img
      width: 100%
      height: 100%
</style>
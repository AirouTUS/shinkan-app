<template lang="pug">
  div.comp.p-2(v-if="isActive" @click="share")
    b-icon(icon="share-alt")
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

type Props = {
  title: string
  text: string
  url: string
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  setup(props: Props) {
    const isActive = ref(false)
    if ((window.navigator as any).share) isActive.value = true

    const share = () => {
      console.log(props);
      (window.navigator as any).share({
        title: props.title,
        text: props.text,
        url: props.url
      })
    }
    return {
      isActive, share
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
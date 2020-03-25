<template lang="pug">
  div.v-infinite-loading(ref="$el")
    div(v-show="showingSpinner"): slot(name="spinner"): div.spinner
    div(v-show="showingNoResults"): slot(name="no-results") データがありません
    div(v-show="showingNoMore"): slot(name="no-more") 最後です
    div(v-show="showingError"): slot(name="error") エラー
</template>

<script lang="ts">
  import {computed, defineComponent, onMounted, ref, watch} from '@vue/composition-api'

  export const STATUS = {
    READY: 0,
    LOADING: 1,
    COMPLETED: 2,
    ERROR: 3,
  }

  export type StateChanger = {
    loaded: () => void
    complete: (noResults?: boolean) => void
    reset: () => void
    error: () => void
  }

  export default defineComponent({
    props: {
      identifier: {
        default: +new Date(),
      }
    },
    setup(props, ctx) {
      const $el = ref<Element>(null)
      const status = ref(STATUS.READY)
      const isFirst = ref(true)
      const showingSpinner = computed(() => [STATUS.READY, STATUS.LOADING].includes(status.value))
      const showingError = computed(() => STATUS.ERROR === status.value)
      const showingNoResults = computed(() => STATUS.COMPLETED === status.value && isFirst.value)
      const showingNoMore = computed(() => STATUS.COMPLETED === status.value && !isFirst.value)

      watch(computed(() => props.identifier), () => {
        stateChanger.reset()
      }, {lazy: true})

      const observer = new IntersectionObserver(() => {
        if (STATUS.READY === status.value) {
          infinite()
        }
      }, {
        root: ctx.parent!.$el,
        rootMargin: "0px 0px",
        threshold: 0
      })

      const stateChanger = {
        loaded: () => {
          status.value = STATUS.READY
          isFirst.value = false
        },
        complete: (noResults = false) => {
          status.value = STATUS.COMPLETED
          isFirst.value = noResults
        },
        reset: () => {
          status.value = STATUS.READY
          isFirst.value = true
          infinite()
        },
        error: () => {
          status.value = STATUS.ERROR
        }
      }

      function infinite() {
        status.value = STATUS.LOADING
        ctx.emit('infinite', stateChanger)
      }

      onMounted(() => {
        observer.observe($el.value!)
      })

      return {
        $el,
        showingSpinner, showingError, showingNoResults, showingNoMore
      }
    }
  })
</script>

<style lang="sass">
  .v-infinite-loading
    min-height: 72px
    display: flex
    justify-content: center
    align-items: center

  .spinner
    font-size: .375em
    position: relative
    width: 1em
    height: 1em
    margin: 3.75em
    border-radius: 50%
    color: grey
    text-indent: -9999em
    -webkit-animation: spinner-animation 1.3s infinite linear
    animation: spinner-animation 1.3s infinite linear
    -webkit-transform: translateZ(0)
    -ms-transform: translateZ(0)
    transform: translateZ(0)

  @-webkit-keyframes spinner-animation
    0%,
    100%
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0
    12.5%
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em
    25%
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em
    37.5%
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em
    50%
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em
    62.5%
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em
    75%
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0
    87.5%
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em

  @keyframes spinner-animation
    0%,
    100%
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0
    12.5%
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em
    25%
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em
    37.5%
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em
    50%
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em
    62.5%
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em
    75%
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0
    87.5%
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em
</style>

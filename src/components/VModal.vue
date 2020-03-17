<template lang="pug">
  transition(:name="animation")
    div.v-modal(v-if="active" :class="customClass" tabindex="-1")
      div.v-modal-backdrop(@click="close")
      button.v-modal-close.large(v-if="closable" type="button" @click="close")

      component.v-modal-card(:is="component"
        v-bind="props"
        v-on="events"
        @close="closeForce"
        @update:closable="setClosable"
        @update:cb-blocked="setCallbackBlocked")
</template>

<script lang="ts">
  import { defineComponent, computed, onBeforeMount, onMounted, onBeforeUnmount, reactive, toRefs } from '@vue/composition-api'
  import { ComponentInstance } from '@vue/composition-api/dist/component/component'

  type Props = {
    width: string
    animation: string
    scroll: 'clip' | 'keep'
    customClass: string
  }

  const props = {
    component: [Object, Function],
    props: Object,
    events: Object,
    width: {
      type: String,
      default: '960'
    },
    animation: {
      type: String,
      default: 'zoom-out'
    },
    scroll: {
      type: String,
      default: 'clip',
      validator: (value: string) => ['clip', 'keep'].includes(value)
    },
    customClass: String
  }

  function ModalController(props: {scroll: 'clip' | 'keep'}, root: ComponentInstance) {
    const state = reactive({
      active: false
    })
    // const uid = computed<number>(() => (root as any)._uid)
    const uid = computed<number>(() => 1)
    
    const create = () => {
      document.body.appendChild(root.$el)
    }
    const open = () => {
      state.active = true
      if ('clip' === props.scroll) {
        document.documentElement.classList.add('clipped')
      } else {
        document.body.classList.add('noscroll')
      }      
    }
    const close = () => {
      state.active = false
      document.body.classList.remove('noscroll')
      document.documentElement.classList.remove('clipped')
    }
    const destroy = () => {
      root.$destroy()
      if ('undefined' !== typeof root.$el.remove) {
        root.$el.remove()
      } else if ('undefined' !== typeof root.$el.parentNode) {
        root.$el.parentNode!.removeChild(root.$el)
      }      
    }

    return { state, uid, create, open, close, destroy }
  }

  export default defineComponent({
    props,
    setup(props: Props, {root}) {
      const modal = ModalController({scroll: props.scroll}, root)
      const state = reactive({
          closable: true as boolean
      })
      // const isLast = computed(() => root.$store.getters['modal/isLast'](modal.uid.value))
      const isLast = true
      let forceClose = false
      let callback = () => {}
      let callbackBlocked = () => {}

      // root.$store.commit('modal/push', modal.uid.value)

      onBeforeMount(async () => {
          const query = Object.assign({}, root.$route.query, {modal: modal.uid.value})
          await root.$router.push({query})
      })
      onMounted(() => {
        window.addEventListener('popstate', onBack)
        document.addEventListener('keyup', keyPress)
        modal.create()
        modal.open()
      })
      onBeforeUnmount(() => {
        modal.close()
        document.removeEventListener('keyup', keyPress)
        window.removeEventListener('popstate', onBack)
      })

      function onBack() {
        if (modal.state.active && isLast && modal.uid.value !== Number(root.$route.query.modal)) {
          if (state.closable || forceClose) {
            modal.state.active = false
            // root.$store.commit('modal/remove', modal.uid.value)
            callback()
            setTimeout(modal.destroy, 150)
          } else {
            root.$router.forward()
            callbackBlocked()
          }
        }
      }
      async function keyPress(event: KeyboardEvent) {
        // Esc key
        if ([event.key, event.keyCode].includes(27) && isLast) {
          await close()
        }
      }
      async function close() {
        if (!state.closable) return
        await root.$router.back()        
      }
      
      const closeForce = (_callback = () => {}) => {
        forceClose = true
        callback = _callback
        root.$router.back()
      }
      const setClosable = (closable = true) => {
        state.closable = closable
      }
      const setCallbackBlocked = (callback = () => {}) => {
        callbackBlocked = callback
      }
      return {
        ...toRefs(modal.state),
        ...toRefs(state),
        close,
        closeForce,
        setClosable,
        setCallbackBlocked
      }
    }
  })
</script>

<style lang="sass">
  .overlay
    position: absolute
    bottom: 0
    left: 0
    right: 0
    top: 0

  .v-modal
    @extend .overlay
    align-items: center
    display: flex
    flex-direction: column
    justify-content: center
    overflow: hidden
    position: fixed
    z-index: 40
    &.is-full-screen
      .v-modal-close
        display: none
      .v-modal-backdrop
        opacity: .5
        pointer-events: none
      .v-modal-card-foot
        border-radius: 0
      .v-modal-card
        height: 100vh
        width: 100%
        > :first-child
          border-top-left-radius: 0
          border-top-right-radius: 0
        > :last-child
          border-bottom-left-radius: 0
          border-bottom-right-radius: 0
    &.delete-modal
      .v-modal-card-foot
        flex-direction: row-reverse
        align-items: baseline

    &-backdrop
      @extend .overlay
      background-color: $modal-backdrop-color

    &-card
      max-height: 100vh
      overflow: auto
      position: relative
      width: calc(100% - 1.5rem)
      max-width: 960px
      > :first-child
        border-top-left-radius: $modal-radius
        border-top-right-radius: $modal-radius
      > :last-child
        border-bottom-left-radius: $modal-radius
        border-bottom-right-radius: $modal-radius

    &-close
      position: fixed
      right: 20px
      top: 20px
      background: none
      height: 32px
      max-height: 32px
      min-height: 32px
      width: 32px
      max-width: 32px
      min-width: 32px
      -moz-appearance: none
      -webkit-appearance: none
      //background-color: rgba($scheme-invert, 0.2)
      border: none
      border-radius: 50%
      cursor: pointer
      pointer-events: auto
      display: inline-block
      flex-grow: 0
      flex-shrink: 0
      font-size: 0
      outline: none
      vertical-align: top
      &::before,
      &::after
        //background-color: $scheme-main
        content: ""
        display: block
        left: 50%
        position: absolute
        top: 50%
        transform: translateX(-50%) translateY(-50%) rotate(45deg)
        transform-origin: center center
      &::before
        height: 2px
        width: 50%
      &::after
        height: 50%
        width: 2px

    &-card
      display: flex
      flex-direction: column
      max-height: 100vh
      overflow: hidden
      -ms-overflow-y: visible

    &-card-head,
    &-card-foot
      position: relative
      display: flex
      flex-shrink: 0
      justify-content: space-around
      align-items: center
      padding: $modal-padding
      background-color: $modal-bg-color

    &-card-title
      flex-grow: 1
      flex-shrink: 0
      text-align: center
      font-weight: bold

    &-card-body
      flex-grow: 1
      flex-shrink: 1
      padding: $modal-padding
      background-color: $modal-bg-color
      overflow: auto
</style>

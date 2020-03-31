import { SetupContext, reactive, computed, toRefs, watch } from '@vue/composition-api'
import { Circle, StateChanger } from '@/types'
import CircleModel from '@/models/CircleModel'

export default ({root}: SetupContext) => {
  const state = reactive({
    circles: [] as Circle[],
    circle: {} as Circle,
    listLoading: false,
    loading: false,
    identifier: 1
  })

  const circleId = computed(() => root.$route.params.circleId)
  const categoryId = computed(() => root.$route.query.categoryId)
  let perPage = 20
  let cursor = 0
  let isLast = false

  async function reset() {
    state.circles = []
    cursor = 0
    isLast = false
    state.identifier++
  }
  async function getList() {
    if (isLast || state.loading) return

    state.listLoading = true
    return new CircleModel().getList(createQuery()).then(res => {
      state.circles.push(...res.data.circles)
      if (!res.data.circles.length) isLast = true
    }).finally(() => {
      state.listLoading = false
    })
  }
  async function get() {
    if (state.loading) return

    state.loading = true
    return new CircleModel().get(circleId.value).then(res => {
      state.circle = res.data
    }).finally(() => {
      state.loading = false
    })
  }

  function createQuery() {
    return {
      start: cursor,
      end: cursor+perPage-1,
      categoryId: categoryId.value || undefined
    }
  }

  async function infiniteHandler($state: StateChanger) {
    await getList()
    if (isLast) {
      $state.complete(!state.circles.length)
    } else {
      $state.loaded()
    }
    cursor += perPage
  }

  function navigateToCircles(categoryId: string) {
    root.$router.push({path: '/circles', query: {categoryId: categoryId || undefined}})
  }
  function navigateToCircle(_circleId: string) {
    if (circleId.value === _circleId) return
    root.$router.push({name: 'circleDetail', params: {circleId: _circleId}})
  }

  return {
    ...toRefs(state), circleId, categoryId,
    get, getList, reset,
    navigateToCircle, navigateToCircles,
    infiniteHandler
  }
}
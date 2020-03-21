import { SetupContext, reactive, computed, toRefs, watch } from '@vue/composition-api'
import { Circle } from '@/types'
import CircleModel from '@/models/CircleModel'

export default ({root}: SetupContext) => {
  const state = reactive({
    circles: [] as Circle[],
    circle: {} as Circle,
    listLoading: false,
    loading: false,
    categoryId: NaN
  })

  const circleId = computed(() => root.$route.params.circleId)
  let perPage = 20
  let cursor = 0

  function reset() {
    state.circles = []
  }

  async function getList() {
    state.listLoading = true
    new CircleModel().getList(createQuery()).then(res => {
      state.circles.push(...res.data.circles)
      state.listLoading = false
    })
  }
  async function get() {
    state.loading = true
    new CircleModel().get(circleId.value).then(res => {
      state.circle = res.data
      state.loading = false
    })
  }

  function createQuery() {
    return {
      start: cursor,
      end: cursor+perPage-1,
      categoryId: state.categoryId || undefined
    }
  }

  function navigateToCircles(categoryId: string) {
    // for page rendering
    state.listLoading = true
    root.$router.push({path: '/circles', query: {categoryId: categoryId || undefined}})
  }
  function navigateToCircle(circleId: string) {
    state.loading = true
    root.$router.push({name: 'circleDetail', params: {circleId: circleId}})
  }

  async function infiniteHandler() {
    await getList()
    cursor += perPage
  }

  return {
    ...toRefs(state), circleId,
    get, getList, reset,
    navigateToCircle, navigateToCircles
  }
}
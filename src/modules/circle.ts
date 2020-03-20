import { SetupContext, reactive, computed, toRefs, watch } from '@vue/composition-api'
import { Circle } from '@/types'
import CircleModel from '@/models/CircleModel'

export default ({root}: SetupContext) => {
  const state = reactive({
    circles: [] as Circle[],
    circle: {} as Circle,
    listLoading: false,
    loading: false,
    // perPage: 20,
    categoryId: NaN
  })

  const circleId = computed(() => root.$route.params.circleId)

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
      // perPage: state.perPage,
      categoryId: state.categoryId || undefined
    }
  }

  function navigateToCircles() {
    root.$router.push({path: '/circles'})
    getList()
  }
  function navigateToCircle() {
    root.$router.push({name: 'circleDetail', params: {circleId: '1'}})
    get()
  }

  async function infiniteHandler() {
    await getList()
  }

  return {
    ...toRefs(state), circleId,
    get, getList,
    navigateToCircle, navigateToCircles
  }
}
import { SetupContext, reactive, computed, toRefs } from '@vue/composition-api'
import { Category } from '@/types'
import { CategoryModel } from '@/models'

export default ({root}: SetupContext) => {
  const state = reactive({
    categories: [] as Category[],
    listLoading: false
  })

  const categoryId = computed(() => root.$route.query.categoryId)

  async function getList() {
    state.listLoading = true
    new CategoryModel().getList().then(res => {
      state.categories.push(...res.data.categories)
      state.listLoading = false
    })
  } 

  function toIcon(category: Category) {
    let icon = ""
    switch(category.name) {
      case "委員会":
        icon = "hands-helping"
        break
      case "文化系":
        icon = "microscope"
        break
      case "体育会系":
        icon = "running"
        break
    }
    return icon
  }

  function toStyle(category: Category) {
    let style = ""
    switch(category.name) {
      case "委員会":
        style = "background: #499F20"
        break
      case "文化系":
        style = "background: #306AA7"
        break
      case "体育会系":
        style = "background: #D34328"
        break
    }
    return style
  }

  return {
    ...toRefs(state),
    categoryId, getList,
    toIcon, toStyle
  }
}
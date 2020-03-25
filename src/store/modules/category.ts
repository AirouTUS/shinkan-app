import {GetterTree, MutationTree, ActionTree} from 'vuex'
import {Category} from '@/types'
import {CategoryModel} from '@/models'
import {RootState} from '@/types/store'

type State = {
  categories: Category[]
}

const state: State = {
  categories: []
}

const getters: GetterTree<State, RootState> = {
  isLoaded(state) {
    if (state.categories.length > 0) true
    return false
  }
}

const mutations: MutationTree<State> = {
  setList(state, categories) {
    state.categories = categories
  }
}

const actions: ActionTree<State, RootState> = {
  getList({commit}) {
    return new CategoryModel().getList().then((res: any) => {
      commit('set', res.data.categories)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
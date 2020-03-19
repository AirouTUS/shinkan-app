import Vue from 'vue'
import Vuex from 'vuex'
import { Category } from '@/types'
import CategoryModel from '@/models/CategoryModel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [] as Category[]
  },
  getters: {
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    }
  },
  actions: {
    getCategories({commit}) {
      return new CategoryModel().getList().then(res => {
        commit('setCategories', res.data.categories)
      })
    }
  },
  modules: {
  }
})

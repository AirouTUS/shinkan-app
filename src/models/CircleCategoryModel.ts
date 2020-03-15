import BaseModel from './BaseModel'

export default class CircleCategoryModel extends BaseModel {
  constructor() {
    super(``)
  }

  public async get() {
    return this.axios
      .get(`/stabs/categories.json`)
  }
}
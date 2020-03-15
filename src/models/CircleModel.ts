import BaseModel from './BaseModel'

export default class CircleModel extends BaseModel {
  constructor() {
    super(``)
  }

  public async get() {
    return this.axios
      .get(`/stabs/circle.json`)
  }
  public async getList() {
    return this.axios
      .get('/stabs/circles.json')
  }
}
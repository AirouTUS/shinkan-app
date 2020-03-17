import BaseModel from './BaseModel'

export default class CircleModel extends BaseModel {
  constructor() {
    super(process.env.VUE_APP_API_ENDPOINT + '/circles')
  }

  // public async get() {
  //   return this.axios
  //     .get(`/stabs/circle.json`)
  // }
  // public async getList() {
  //   return this.axios
  //     .get('/stabs/circles.json')
  // }
}
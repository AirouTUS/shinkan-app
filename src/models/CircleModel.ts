import BaseModel from './BaseModel'

export default class CircleModel extends BaseModel {
  constructor() {
    super(process.env.VUE_APP_API_ENDPOINT + '/circles')
  }
}
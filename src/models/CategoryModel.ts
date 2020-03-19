import BaseModel from './BaseModel'

export default class CategoryModel extends BaseModel {
  constructor() {
    super(process.env.VUE_APP_API_ENDPOINT + '/categories')
  }
}
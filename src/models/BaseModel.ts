import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'

export default abstract class BaseModel {

  static getHeaders() {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  }
  static stringify = (query = {}) => qs.stringify(query, {indices: false})

  protected axios = axios.create({
    headers: BaseModel.getHeaders()
  })

  protected constructor(baseURL: string) {
    this.axios = axios.create({baseURL, headers: BaseModel.getHeaders()})
  }

  public async getList() {
    return this.axios
      .get(``)
  }

  public async get(id: string) {
    return this.axios
      .get(`/${id}`)
  }
}
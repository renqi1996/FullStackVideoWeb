import axios, { AxiosPromise } from 'axios';

const instance = axios.create({ timeout: 1000 * 10 })
instance.defaults.baseURL = 'http://localhost:3000'
// instance.defaults.withCredentials = true

type TypeofAxiosMethod = 'get' | 'GET' | 'POST' | 'post'

function request<T>(
  url: string,
  method: TypeofAxiosMethod,
  params: object = {}
): AxiosPromise<T> {
  const args = params || {}
  const requestData = {
    url,
    method,
    data: {},
    params: {}
  }

  if (method === 'get' || method === 'GET') {
    requestData.params = args
  } else {
    requestData.data = args
  }

  return instance(requestData)
}

export default request;

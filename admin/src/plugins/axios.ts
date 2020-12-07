/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'
import router from '../router/index'

// TODO 提示函数封装

/**
 * 请求失败后的统一错误处理
 * @param {Number} code 请求失败的状态码
 */
const errorHandle = (): void => {};

/**
 * 创建axios实例
 */
const instance = axios.create({
  // TODO 环境区分
  // baseURL: process.env.NODE_ENV == 'development' ? '' : ''
  baseURL: 'http://localhost:3000',
  timeout: 1000 * 12
});

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default instance
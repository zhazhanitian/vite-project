import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import router from '@/router/index'
import store from '@/store'

// 接口响应通过格式
export interface HttpResponse {
  code: number
  msg: string
  success: boolean
  [key: string]: any
}

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_API,
  // 超时
  timeout: 30000
})

const notHasAttribute = (url: string = '', type: string = ''): boolean => {
  return url.indexOf(type) === -1
}

// 返回其他状态吗
service.defaults.validateStatus = (status: number): boolean => {
  return status >= 200 && status <= 500 // 默认的
}

/**
 * HTTP request 拦截
 */
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    /* eslint-disable */
    // @ts-ignore
    const { $tenantId: tenantId = '', $sysDigitalReform: sysDigitalReform = '' } = window
    const quest: AxiosRequestConfig = { ...config }
    quest.headers.Authorization = import.meta.env.VITE_APP_AUTH
    quest.headers['Tenant-id'] = `${tenantId}`
    quest.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    quest.headers['Blade-Auth'] = store.state.userInfo.token || ''
    if (notHasAttribute(quest.url, '&sysDigitalReform=') && notHasAttribute(quest.url, '?sysDigitalReform=')) quest.params = { sysDigitalReform, ...quest.params, tenantId }
    if (notHasAttribute(quest.url, '&tenantId=') && notHasAttribute(quest.url, '?tenantId=')) quest.params = { tenantId, ...quest.params }
    /* eslint-disable */
    return quest
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

/**
 * HTTP response 拦截
 */
service.interceptors.response.use(
  (res: AxiosResponse) => {
    const status = Number(res.status) || 200
    if (res.data.code === 401) router.push('/login')
    return res.data
  },
  err => {
    const { response } = err
    return Promise.reject(response || err)
  }
)

export default service

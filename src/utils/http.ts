import axios from 'axios'

// 创建axios实例
// 创建请求时可以用的配置选项
const instance = axios.create({
  withCredentials: true,
  timeout: 3000,
  baseURL: ''
})

// axios的全局配置
instance.defaults.headers.post = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
instance.defaults.headers.common = {
  'Auth-Type': 'company-web',
  'X-Requested-With': 'XMLHttpRequest',
  token: 'sdfjlsdfjlsdjflsjflsfjlskd'
}

// 添加请求拦截器(post只能接受字符串类型数据)
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  // 响应包含以下信息data,status,statusText,headers,config
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  (err) => {
    const { response } = err
    return Promise.reject(response || err)
  }
)

export default instance

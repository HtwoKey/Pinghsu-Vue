import axios from 'axios'
import router from '@/router/index'
import NProgress from 'nprogress' // 进度条

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    NProgress.start() // 进度条开始
    return config
  },
  error => {
    NProgress.done() // 关闭进度条
    return Promise.reject(error)
  }
)

// response 拦截器as
service.interceptors.response.use(
  response => {
    /**
     * code 为200 返回 数据
     */
    NProgress.done() // 关闭进度条
    const res = response.data
    switch (res.code) {
      case 200:
        return response.data
      case 400:
        console.log(res.messages)
        router.push({
          path: '/notFound'
        })
        break
    }
  },
  error => {
    const code = error.response.data.code
    // 处理400 和 500错误
    switch (code) {
      case 400:
        router.push({
          path: '/404'
        })
        break
      case 500:
        console.log('err' + error) // for debug
        router.push({
          path: '/error'
        })
        break
      default:
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
  }
)

export default service

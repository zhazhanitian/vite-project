import request from '@/utils/axios'
import qs from 'qs'

/**
 * @interface userTokenQuery - 获取token参数
 * @property {string} username - 用户名
 * @property {string} password - 用户密码
 */
interface userTokenQuery {
  username: string
  password: string
}

/**
 * 获取token
 */
export function getUserToken(query: userTokenQuery) {
  return request({
    url: `/blade-auth/oauth/token`,
    method: 'post',
    data: qs.stringify({
      grant_type: 'captcha',
      scope: 'all',
      ...query
    })
  })
}

/**
 * 获取用户信息
 */
export function getUserInfo(query: string) {
  return request({
    url: `/blade-user/userInfo/${query}`,
    method: 'get'
  })
}

/**
 * @interface userTokenQuery - 获取路由tab参数
 * @property {string} code - 菜单code
 * @property {number} level - 菜单深度
 */
interface routerByLevelQuery {
  code: string
  level: number
}

/**
 * 获取路由tab
 */
export function getQzRoutesByLevel(query: routerByLevelQuery) {
  return request({
    url: `/blade-system/menu/qzRoutesByLevel?${qs.stringify(query)}`,
    method: 'get'
  })
}

/**
 * 获取鉴权信息
 */
export function getJsApiTokenJson() {
  return request({
    url: `/blade-user/user/getJsApiTokenJson`,
    method: 'post'
  })
}

/**
 * 获取系统配置信息
 */
export function getAttributeByTenantId() {
  return request({
    url: `blade-system/tenant/getAttributeByTenantId`,
    method: 'get'
  })
}

/**
 * 跑马灯-消息通知
 */
export function getPortalQuota() {
  return request({
    url: `/digital-reform/portal/getPortalQuota`,
    method: 'get'
  })
}

/**
 * 获取饼图数据
 */
export function getPortalTaskStatistics(query: { sysDigitalReform: string }) {
  return request({
    url: `/digital-reform/portal/getPortalTaskStatistics?${qs.stringify(query)}`,
    method: 'get'
  })
}

/**
 * 获取tab下表格数据
 */
export function getPortalTask(query: { sysDigitalReform: string }) {
  return request({
    url: `/digital-reform/portal/getPortalTask?${qs.stringify(query)}`,
    method: 'get'
  })
}

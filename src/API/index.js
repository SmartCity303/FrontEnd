/**
 * 包含n个接口请求函数的模块
 * 返回值：promise对象
 */

const BASR_URL = '/api'

import ajax from './ajax'

//1.根据userid获取用户详细信息
export const reqUserInfo = (userId) => ajax('/api/doctor/query',{userId})
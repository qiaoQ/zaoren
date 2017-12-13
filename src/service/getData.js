/*Mr Zhang*/
import fetch from '../assets/js/fetch'
import {getStore} from '../assets/js/mUtils'
/**
* 获取首页轮播图
*/
export const banner = (baseData) => fetch('/index/index.htm',baseData)
/**
*热门职位列表
*/
export const posiList = (baseData) => fetch('/index/hotposition.htm?',baseData)
/*
*伯乐账号登录
 */
export const bllogin = (baseData) => fetch('/boleLogin/loginAccPasswd.htm',baseData)
/*
*推荐进展列表
 */
export const recommendList = (baseData) => fetch('/recommend/progress.htm',baseData)
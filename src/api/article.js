
/** article API **/
import request from '@/utils/request'

/**
 * 首页数据接口
 * @param page 当前页
 */
export function getitem(page) {
  return request({
    url: '/article/item/'+page,
    method: 'get',
  })
}

/**
 * 获取文章
 * @param id 文章id
 */
export function getArticle(id) {
  return request({
    url:'/article/'+id,
    method:'get',
  })
}

/**
 * 时间线页面数据接口
 */
export function archives() {
  return request({
    url: '/article/timeline',
    method:'get',
  })
}

/**
 * 搜索页数据异步搜索数据接口
 * @param keyword 关键字
 */
export function search(keyword) {
  return request({
    url:'/article/search',
    method:'get',
    params: { keyword:keyword }
  })
}

/**
 * 按分类查询文章
 * @param id 分类id
 */
export function categoty(id) {
  return request({
    url:'/article/cat/'+id,
    method:'get',
  })

}

/**
 * 按标签查询文章
 * @param id
 */
export function findByTags(id) {
  return request({
    url:'/article/tag/'+id,
    method:'get'
  })

}
/**
 * 查询文章上一篇和下一篇
 * @param {*} id 
 */
export function findNext(id){
  return request({
    url:'/article/next/'+id,
    method:'get'
  })
}

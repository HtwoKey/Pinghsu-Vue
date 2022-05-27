import request from '@/utils/request'

/**
 * 添加评论
 * @param params
 */
export function addComm(params) {
  return request({
    url: '/comments/',
    method: 'post',
    data: params
  })
}

/**
 * 评论列表
 * @param id
 */
export function commList(id) {
  return request({
    url: '/comments/' + id,
    method: 'get'
  })
}

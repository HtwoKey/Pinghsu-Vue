import request from '@/utils/request'

// 获取文章引用的标签
export function getTag(id) {
  return request({
    url: '/tags/article/' + id,
    method: 'get'
  })
}

// 获取词条列表
export function getEntryList() {
  return request({
    url: '/tags/group',
    method: 'get'
  })
}

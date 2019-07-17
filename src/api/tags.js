
//tags API
import request from '@/utils/request'

//获取文章引用的标签
export function getArticle_tag(id) {
  return request({
    url:'/tags/article/'+id,
    method:'get',
  })

}
// 获取标签引用次数分组
export function getCitationsByGroup() {
  return request({
    url: '/tags/group',
    method: 'get'
  })
}

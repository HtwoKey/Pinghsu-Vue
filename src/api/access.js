

 import request from '../utils/request'

 /**
  * 添加用户的访问记录
  */
 export function addAccess() {
   return request({
     url:'/access/',
     method:'get',
   })
 }

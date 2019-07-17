import request from '../utils/request'

export function applyList(){
    return request({
        url:'/links/applyList',
        method:'get',
    })
}

export function addLinks(params){
    return request({
        url:'/links/',
        method:'post',
        data: params
    })
}

export function list(){
    return request({
        url:'/links/list',
        method:'get'
    })
}
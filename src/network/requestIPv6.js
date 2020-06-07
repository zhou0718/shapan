import {request} from "./requestV6";

export function requestExplore(pageNo,pageSize) {
  return request({
    url:'/list/route6',
    method: 'post',
    params:{
      pageNo,
      pageSize
    }
  })
}

export function requestView(pageNo,pageSize) {
  return request({
    url:'/list/inet6num',
    method: 'post',
    params:{
      pageNo,
      pageSize,
    }
  })
}

import {request} from "./requestV6";

export function requestRouter(pageNo,pageSize) {
  return request({
    url:'/list/route6',
    method: 'post',
    params:{
      pageNo,
      pageSize
    }
  })
}

export function requestAddr(pageNo,pageSize) {
  return request({
    url:'/list/inet6num',
    method: 'post',
    params:{
      pageNo,
      pageSize,
    }
  })
}

export function requestService(pageNo, pageSize) {
  return request({
    url: '/list/ipv6service',
    method: 'post',
    params: {
      pageNo,
      pageSize,
    }
  })
}

export function requestGeo(pageNo, pageSize) {
  return request({
    url: '/list/ipv6geo',
    method: 'post',
    params: {
      pageNo,
      pageSize,
    }
  })
}

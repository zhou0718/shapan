import {request} from "./request";

export function requestOrderList() {
  return request({
    url: '/order/list',
    method: 'post',
  })
}

export function requestOrderDetail(orderId) {

  return request({
    url: '/order/detail',
    method: 'post',
    data: {
      orderId,
    }
  })
}

export function requestSubmit(domainName,ipList,org,describe) {
  console.log(describe);
  return request({
    url: '/order/submit',
    method: 'post',
    data: {
      domainName,
      ipList,
      org,
      describe,
    }
  })
}

import {request} from "./request";

export function requestWebsiteList(){
  return request({
    url: '/website/list',
    method: 'post'
  })
}

export function requestWebsiteInfo(websiteId) {
     return request({
       url: '/website/info',
       method: 'post',
       data: {
         websiteId,
       }
     })
}

export function requestUpdate(domainName, status) {
  return request({
    url: '/website/update',
    method: 'post',
    data: {
      domainName,
      status
    }
  })
}

export function requestStart(websiteId) {
   return request({
     url: '/website/start',
     method: 'post',
     data:{
       websiteId,
     }
   })
}

export function requestStop(websiteId){
  return request({
    url: '/website/stop',
    method: 'post',
    data:{
      websiteId,
    }
  })
}

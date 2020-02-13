import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getUsers() {
  return request({
    url: '/api/admin/user/list',
    method: 'get'
  })
}

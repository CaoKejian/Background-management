import request from './index'

export const adminLoginApi = () => request.get('/user/list')
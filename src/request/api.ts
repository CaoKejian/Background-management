import request from './index'

interface AdminLoginData{
  username:string
  pwd:string
}
type PromiseRes<T> = Promise<ManageResult<T>>
interface ManageResult<T> {
  code:number,
  data: T,
  message:string
}
interface AdminLoginRes{
  token:string
}
interface AdminInfo {
  menu:[]
}

export const adminLoginApi = (data:AdminLoginData):PromiseRes<AdminLoginRes> => request.get('/user/list',{params:data})

export const adminInfoApi = ():PromiseRes<AdminInfo> => request.get('/info/list')
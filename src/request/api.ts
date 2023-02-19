import request from './index'

interface AdminLoginData {
  username: string
  pwd: string
}
type PromiseRes<T> = Promise<ManageResult<T>>
interface ManageResult<T> {
  code: number
  data: T
  message?: string
}
interface AdminLoginRes {
  token: string
}
interface CityRes {
  name: string,
  id: string
}



export const adminLoginApi = (data: AdminLoginData): PromiseRes<AdminLoginRes> => request.get('/user/list', { params: data })

export const adminInfoApi = (): Promise<any> => request.get('/info/list')
export const articleListApi = (): Promise<any> => request.get('/article/list')
export const cityListApi = (): PromiseRes<any> => request.get('/city/list')



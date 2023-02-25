import request from './index'

interface AdminLoginData {
  username: string
  pwd: string
}
type PromiseRes<T> = Promise<ManageResult<T>>
interface ManageResult<T> {
  code?: number
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
interface CityRes {
  _id: string
  username: string,
  pdSafety: string,
  phSafety: string,
  mbSafety: [],
  mailSafety: string
}
interface itemUsing {
  data: []
}

interface AdminListParams {
  pageNum: number
  pageSize: number
}

export const adminLoginApi = (data: AdminLoginData): PromiseRes<AdminLoginRes> => request.get('/user/list', { params: data })

export const adminInfoApi = (): Promise<any> => request.get('/info/list')
export const articleListApi = (): Promise<any> => request.get('/article/list')
export const cityListApi = (): PromiseRes<any> => request.get('/city/list')
export const SafetyApi = (): Promise<CityRes> => request.get('/safety/info')
export const hotSearchApi = (): Promise<any> => request.get('/hotSearch/list')
export const getChinaApi = (): Promise<RootObject> => request.get('/china/list')
export const getItemUsingApi = (): Promise<RootObjectItemUsing> => request.get('/itemUsing')
export const getAdminInfoApi = (data: AdminListParams): PromiseRes<{ list: {}[] }> => request.get('/admin/user', { params: data })



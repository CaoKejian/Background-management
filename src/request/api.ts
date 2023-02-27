import request from './index'

interface AdminLoginData {
  username: string
  pwd: string
}
type PromiseRes<T = {}> = Promise<ManageResult<T>>
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

export const updateAdmin = (id: number, data: AdminObjItf): PromiseRes => request.post('/admin/role/' + id, data)

export const getRoleListAll = (): PromiseRes<RoleObjItf[]> => request.get('/admin/role')

export const getRoleList = (): PromiseRes<RoleObjItf[]> => request.get('/role/list')
export const getAdminRole = (id:number):PromiseRes<RoleObjItf[]> => request.get('/admin/role/' + id)

// 权限分配搜索查询
export const SearchAdminRole = (username:string) => request.get('/admin/role/search/' + username)
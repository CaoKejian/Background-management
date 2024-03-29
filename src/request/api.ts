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
export const getAdminRole = (id: number): PromiseRes<RoleObjItf[]> => request.get('/admin/role/' + id)

// 权限分配搜索查询
export const SearchAdminRole = (username: string) => request.get('/admin/role/search/' + username)

// 资源列表 获取
export const getResourceList = () => request.get('/people/list')
//资源列表 更新

export const ResourceUpdate = (number: number, data: peopleObjItf): PromiseRes<peopleObjItf[]> => request.post('/people/list/' + number, data)

// 获取商品列表数据

export const getProductList = () => request.get('/product/list')
// 删除商品列表数据
export const deleteProduct = (num: number) => request.get('/product/list/' + num)
// 更新商品数据
export const updateProduct = (num: number, data: listRole) => request.post('/product/update/' + num, data)
// 筛选商品数据

export const SearchProduct = (lastname: string) => request.get('/product/update/' + lastname)
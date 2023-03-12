interface AdminObjItf {
  id?: number
  username?: string
  nickName?: string
  email?: string
  password?: string
  note?: string
  status?: number
}

interface AdminRoleFormData {
  userRoles: RoleListItf[]
  roleLists: RoleObjItf[]
}

interface peopleObjItf {
  name: string
  address: string
  content: string
  addData: string
}
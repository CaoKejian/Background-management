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
  name?: string
  number?: number
  address?: string
  content?: string
  addData?: string
}

type listRole = {
  num?: number
  firstname?: string,
  lastname?: string,
  label?: [],
  storage?: number,
  integral?: number,
  modify?: []
}
<template #default="{route,Component}">
  <div class="wrapper" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/business/businessAnalysis' }">Dashboard</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/permissions/permissionsClass">权限分配</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ClassNow @change="change" :isshow="isshow" :isShowIcon="isShowIcon" />
    <div class="bottom">
      <AlluseDiv :name="name2" />
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="username" label="账号" />
        <el-table-column prop="nickName" label="姓名" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column label="添加时间">
          <template #default='scope'>
            {{ formateDate(scope.row.createTime) }}
          </template>
        </el-table-column>
        <el-table-column label="最后登录">
          <template #default='scope'>
            {{ formateDate(scope.row.loginTime) }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="是否启用">
          <template #default='scope'>
            <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" @click="open(scope.row.status)" />
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button link type="primary" @click="allocRole(row.id)">分配角色</el-button>
            <el-button link type="primary" @click="editAdmin(row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @current-change="handleCurrentChange" :page-size="10" :pager-count="7" layout="prev, pager, next"
        v-model:currentPage="state.pageSize" :total="state.total" />
    </div>
    <EditAdmin :visible="visible" :form="rowData" @close="closeDialog" />
    <ClassRole :form="RoleData" :visible="Rolevisible" @close="RolecloseDialog" />
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, onMounted } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import ClassNow from './components/ClassNow.vue'
import { getRoleListAll, getAdminRole, getRoleList } from '@/request/api'
import EditAdmin from './components/EditAdmin.vue';
import ClassRole from './components/ClassRole.vue';
import 'animate.css';
import { ElMessage } from 'element-plus'

const state = reactive<{
  name1: string
  name2: string
  tableData: {}[]
  visible: boolean
  Rolevisible: boolean
  RoleData: AdminRoleFormData
  rowData: {}
  total: number
  pageSize: number
  Data: {}[]
  isshow: number
  isShowIcon: boolean
}>({
  name1: "当前权限",
  name2: "更改权限",
  tableData: [],
  visible: false,
  Rolevisible: false,
  RoleData: <AdminRoleFormData>{},
  rowData: {},
  total: Number(''),
  pageSize: 1,
  Data: [],
  isshow: 1,
  isShowIcon: false
})
onMounted(() => {
  getRoleData()
  RoleList()
})

const { Rolevisible, RoleData, name1, name2, tableData, visible, rowData, total, pageSize, Data, isshow, isShowIcon } = toRefs(state)

const getRoleData = () => {
  getRoleListAll().then(res => {
    console.log(res);

    // RoleData.value.roleLists = res.data
    total.value = res.data.length
    Data.value = res.data
    tableData.value = res.data.slice(0, 10)
  })
}
// 获取三种角色
const RoleList = () => {
  getRoleList().then(res => {
    console.log(res);
    RoleData.value.roleLists = res.data
    console.log(RoleData.value.roleLists);
  })
}
const open = (status: number) => {
  status == 1 ? ElMessage({
    message: '已开启',
    type: 'success',
  }) :
    ElMessage({
      message: '已关闭',
      type: 'warning',
    })
}
const change = () => {
  isshow.value = 2
  isShowIcon.value = true
  setTimeout(() => {
    isshow.value = 1
    isShowIcon.value = false
  }, 1000);
}
//  分页功能
const handleCurrentChange = (val: number) => {
  pageSize.value = val
  tableData.value = Data.value.slice((pageSize.value - 1) * 10, pageSize.value * 10)
}
// 分配角色
const allocRole = (id: number) => {
  getAdminRole(id).then(res => {
    Rolevisible.value = true
    RoleData.value.userRoles = res.data[0].data
    console.log(RoleData.value.userRoles);
  })
}
// 编辑
const editAdmin = (row: AdminObjItf) => {
  visible.value = true
  rowData.value = row
}

// 关闭弹框
const closeDialog = (r?: 'reload') => {
  visible.value = false
  if (r === 'reload') {
    getRoleData()
  }
}
const RolecloseDialog = () => {
  Rolevisible.value = false
}

// 格式化时间
const formateDate = (time: string | undefined) => {
  if (!time) {
    return
  } else {
    const date = new Date(time)
    let year = date.getFullYear()
    let month = addZear(date.getMonth() + 1)
    let day = addZear(date.getDate())
    let hour = addZear(date.getHours())
    let min = addZear(date.getMinutes())
    let sec = addZear(date.getSeconds())
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  }
}
const addZear = (num: number) => {
  return num > 9 ? num : '0' + num
}
</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  min-height: 100%;
  background-color: #f0f2f5;
  overflow: hidden;

  .header {
    width: 100%;
    height: 3.75rem;
    background-color: #fff;

    :deep(.el-breadcrumb) {
      position: relative;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }
  }

  .top {
    width: 96%;
    margin: 20px auto;
    border-radius: 3px;

    &-container {
      background-color: #fff;
    }
  }

  .bottom {
    width: 100%;
    height: auto;
    background-color: red;
    border-radius: 3px;
    width: 96%;
    margin: 1.25rem auto;
  }
}

:deep(.el-pagination) {
  float: right;
  margin-bottom: 1.25rem;
}
</style>
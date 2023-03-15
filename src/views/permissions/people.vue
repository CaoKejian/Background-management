<template #default="{route,Component}">
  <div class="wrapper" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/business/businessAnalysis' }">Dashboard</el-breadcrumb-item>
        <el-breadcrumbb-item><a href="/permissions/permissionsClass">用户表</a></el-breadcrumbb-item>
      </el-breadcrumb>
    </div>
    <div class="useDiv">
      <AlluseDiv :name="name" />
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="number" label="编号" width="180" />
          <el-table-column prop="name" label="资源名称" width="180" />
          <el-table-column prop="address" label="资源路径" />
          <el-table-column prop="content" label="资源描述" />
          <el-table-column prop="addData" label="添加时间" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button link type="primary" @click="editBtn(row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination @current-change="handleCurrentChange" :page-size="10" :pager-count="7" layout="prev, pager, next"
          v-model:currentPage="state.pageSize" :total="state.total" />
      </div>
    </div>
    <EditPeople ople :visible="visible" :form="form" @reload="reload" @close="closeDialog" />
  </div>
</template>
<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import EditPeople from './components/EditPeople.vue';
import { getResourceList } from '@/request/api'
import 'animate.css';

const state = reactive<{
  name: string
  tableData: {}[]
  Data: {}[]
  visible: boolean
  form: peopleObjItf
  total: number
  pageSize: number
}>({
  name: '资源列表',
  visible: false,
  form: <peopleObjItf>{},
  tableData: [],
  Data: [],
  total: Number(''),
  pageSize: 1
})
const { name, tableData, visible, form, total, pageSize, Data } = toRefs(state)
const editBtn = (row: peopleObjItf) => {
  visible.value = true
  form.value = row
}
const closeDialog = () => {
  visible.value = false
}
const reload = () => {
  getData()
}
const getData = () => {
  getResourceList().then(res => {
    tableData.value = res.data.slice(0, 10)
    Data.value = res.data
    total.value = res.data.length
  })
}
//分页功能
const handleCurrentChange = (val: number) => {
  pageSize.value = val
  tableData.value = Data.value.slice((pageSize.value - 1) * 10, pageSize.value * 10)
}
onMounted(() => {
  getData()
})
</script>
<style lang='less' scoped>
a {
  text-decoration: none;
  color: #616367;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  min-width: 700px;

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

  .useDiv {
    width: 96%;
    margin: 1.25rem auto;
    height: auto;
    background-color: #fff;

    .table {
      padding: 1.25rem .625rem;
    }
  }
}
</style>
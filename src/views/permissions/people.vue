<template>
  <div class="wrapper">
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
      </div>
    </div>
    <EditPeople :visible="visible" :form="form" @close="closeDialog" />
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import EditPeople from './components/EditPeople.vue';

const state = reactive<{
  name: string
  tableData: {}[]
  visible: boolean
  form: peopleObjItf
}>({
  name: '资源列表',
  visible: false,
  form: <peopleObjItf>{},
  tableData: [{
    number: 1,
    name: '个人信息',
    address: '/info/infoCenter',
    content: '',
    addData: '2023-3-12 22:00'
  }]
})
const { name, tableData, visible, form } = toRefs(state)
const editBtn = (row:peopleObjItf) => {
  visible.value = true
  form.value = row
}
const closeDialog = () => {
  visible.value = false
}
</script>
<style lang='less' scoped>
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
    height: 200px;
    background-color: #fff;

    .table {
      padding: 1.25rem .625rem;
    }
  }
}
</style>
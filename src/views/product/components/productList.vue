<template>
  <div class="table">
    <el-table :data="tableData" height="450" style="width: 100%">
      <el-table-column prop="num" label="编号" width="180" />
      <el-table-column prop="firstname" label="商品品牌" width="180" />
      <el-table-column prop="lastname" label="商品名称" width="180" />
      <el-table-column prop="label" label="标签">
        <template #default='scope'>
          <div class="label">
            <div>
              <span>上架：</span><el-switch v-model="scope.row.label[0]" :active-value="1" :inactive-value="0"
                @click="open1(scope.row.label[0])" />
            </div>
            <div>
              <span>新品：</span><el-switch v-model="scope.row.label[1]" :active-value="1" :inactive-value="0"
                @click="open2(scope.row.label[1])" />
            </div>
            <div>
              <span>推荐：</span><el-switch v-model="scope.row.label[2]" :active-value="1" :inactive-value="0"
                @click="open3(scope.row.label[2])" />
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="integral" label="获得积分" />
      <el-table-column prop="storage" label="库存" />
      <el-table-column prop="modify" label="操作">
        <template #default="{ row }">
          <el-button type="primary" @click="modify(row)">编辑</el-button>
          <el-button type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useProductStore } from '@/stores/product'

const tableData = [{
  num: 1,
  firstname: '美的',
  lastname: '冰箱',
  label: [0, 1, 0],
  storage: 999,
  integral: 120,
  modify: []
},
{
  num: 1,
  firstname: '美的',
  lastname: '冰箱',
  label: [],
  storage: 999,
  integral: 110,
  modify: []
},
{
  num: 1,
  firstname: '美的',
  lastname: '冰箱',
  label: [],
  storage: 999,
  integral: 110,
  modify: []
},
{
  num: 1,
  firstname: '美的',
  lastname: '冰箱',
  label: [],
  storage: 999,
  integral: 110,
  modify: []
}
]
const modify = (row: listRole) => {

}


const open1 = (status: number) => {
  status == 1 ? ElMessage({
    message: '已开启',
    type: 'success',
  }) :
    ElMessage({
      message: '已关闭',
      type: 'warning',
    })
}
const open2 = (status: number) => {
  status == 1 ? ElMessage({
    message: '已开启',
    type: 'success',
  }) :
    ElMessage({
      message: '已关闭',
      type: 'warning',
    })
}
const open3 = (status: number) => {
  status == 1 ? ElMessage({
    message: '已开启',
    type: 'success',
  }) :
    ElMessage({
      message: '已关闭',
      type: 'warning',
    })
}

</script>
<style lang='less' scoped></style>
<template>
  <div class="table">
    <el-table :data="result" height="450" style="width: 100%">
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
          <el-popconfirm title="确定删除?" @confirm="confirm(row.num)" confirm-button-type="danger">
            <template #reference>
              <el-button type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination @current-change="handleCurrentChange" :page-size="10" :pager-count="7" layout="prev, pager, next"
      :total="state.total" v-model:currentPage="state.pageSize" />
  </div>
</template>
<script setup lang='ts'>
import { onMounted, reactive, computed, ref, toRefs, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useProductStore } from '@/stores/product'
import { getProductList, deleteProduct } from '@/request/api'

const useProduct = useProductStore()

const result = computed(() => {
  return useProduct.allList.slice(0, 10)
})
watch(result, (newVal, oldVal) => {
  console.log(newVal, oldVal);
  state.total = useProduct.allList.length
})
const state = reactive<{
  total: number
  pageSize: number
  tableData: listRole[]
  Data: []
}>({
  total: 0,
  pageSize: 1,
  tableData: [],
  Data: []
})
const { tableData, Data } = toRefs(state)
const modify = (row: listRole) => {
  useProduct.row = row
  useProduct.visible = true

}
const handleCurrentChange = (val: number) => {
  state.pageSize = val
  useProduct.allList = Data.value.slice((state.pageSize - 1) * 10, state.pageSize * 10)
}

const confirm = (num: number) => {
  deleteProduct(num).then(res => {
    getProduct()
    ElMessage({
      message: '已删除',
      type: 'warning',
    })
  })
}
const getProduct = () => {
  getProductList().then(res => {
    useProduct.allList = res.data
    tableData.value = res.data.slice(0, 10)
    Data.value = res.data
    state.total = useProduct.allList.length
  })
}
onMounted(() => {
  getProduct()
})

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
<style lang='less' scoped>
.el-pagination {
  float: right;
}
</style>
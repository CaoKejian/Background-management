<template>
  <div class="wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/product/productAdd' }">商品页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/product/productClass">商品分类</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="center">
      <AlluseDiv :name="name1" style="margin-bottom: 20px;" />
      <productSearch @search="search" @refalsh="refalsh" />
      <AlluseDiv :name="name" />
      <productList />
      <elDialog :visible="useProduct.visible" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import productList from './components/productList.vue';
import elDialog from './components/elDialog.vue';
import { ElMessage } from 'element-plus'
import { useProductStore } from '@/stores/product'
import productSearch from './components/productSearch.vue'

const useProduct = useProductStore()
const state = reactive<{
  name: string
  name1: string
  searchdata: {}[]
}>({
  name: "商品列表",
  name1: "筛选搜索",
  searchdata: []
})
const { name, name1, searchdata } = toRefs(state)
const search = (data: {}) => {
  searchdata.value = [data]
}
const refalsh = () => {

}
</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  min-height: calc(100vh - 3rem);
  height: auto;
  overflow: hidden;
  background-color: #f0f2f5;

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

  .center {
    width: 96%;
    margin: 1.25rem auto;
  }

}

.label {
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }
}
</style>
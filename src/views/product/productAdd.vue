<template>
  <div class="wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/product/productAdd' }">商品页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/product/productAdd">添加商品</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="body">
      <AlluseDiv :name="name" />
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="填写商品信息 " />
        <el-step title="填写商品促销 " />
        <el-step title="填写商品属性 " />
        <el-step title="最终验证 " />
      </el-steps>
      <indexOne @add="add" :visible="visible" />
      <indexTow @add="add2" :visible2="visible2" />
      <indexThree @add="add3" :visible3="visible3" />
      <indexFore @add='add4' :visible4="visible4" />
      <div v-show="!visible && !visible2 && !visible3 && !visible4">添加成功</div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import indexOne from './components/indexOne.vue'
import indexTow from './components/indexTwo.vue'
import indexThree from './components/indexThree.vue'
import indexFore from './components/indexFore.vue'
const state = reactive<{
  name: string
  form: {}[]
  active: number
  visible: boolean
  visible2: boolean
  visible3: boolean
  visible4: boolean
}>({
  name: "添加商品",
  form: [],
  active: 0,
  visible: true,
  visible2: false,
  visible3: false,
  visible4: false,
})
const { name, active, visible, visible2, visible3, visible4 } = toRefs(state)
const add = (num: number) => {
  active.value++
  if (active.value == 1) {
    visible.value = false
    visible2.value = true
  }
}
const add2 = () => {
  active.value++
  if (active.value == 2) {
    visible2.value = false
    visible3.value = true
  }
}
const add3 = () => {
  active.value++
  if (active.value == 3) {
    visible3.value = false
    visible4.value = true
  }
}
const add4 = () => {
  active.value++
  if (active.value == 4) {
    visible4.value = false
  }
}
</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 3rem);
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

  .body {
    width: 96%;
    margin: 1.25rem auto;
    background-color: #fff;

    .table {
      width: 40%;
      margin: 1.25rem auto;
      padding: 1.25rem 0;
    }
  }
}
</style>
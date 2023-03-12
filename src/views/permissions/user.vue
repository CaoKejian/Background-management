<template>
  <div class="wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/business/businessAnalysis' }">Dashboard</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/permissions/permissionsClass">用户表</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="useDiv">
      <AlluseDiv :name="name" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';

const state = reactive<{
  name: string
}>({
  name: '资源列表'
})
const { name } = toRefs(state)
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
    width: 100%;
    height: 200px;
    background-color: red;
  }
}
</style>
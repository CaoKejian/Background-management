<template>
  <div class="wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/business/businessAnalysis' }">Dashboard</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/permissions/permissionsClass">权限分配</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ClassNow/>
    <div class="bottom">
      <AlluseDiv :name="name2" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import ClassNow from './components/ClassNow.vue'
const state = reactive<{
  name1: string
  name2: string
}>({
  name1: "当前权限",
  name2: "更改权限",
})
const { name1, name2 } = toRefs(state)
</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: calc(100vh - 3rem);
  background-color: #f0f2f5;
  overflow: hidden;

  .header {
    width: 100%;
    height: 4%;
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
    border-radius: 3px;
    width: 96%;
    margin: 1.25rem auto;
  }
}
</style>
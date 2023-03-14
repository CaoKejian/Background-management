<template #default="{route,Component}">
  <div class="wrapper" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/makewheels/wheelsList' }">造轮子</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/makewheels/wheelsList">水印实例</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box">
      <span>水印示例</span>
    </div>
    <div class="useDiv">
      <el-button style="margin-top: 20px;" type="primary" @click="add">添加水印</el-button>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import 'animate.css';
import { preview, closePreview } from 'vue3-preview-image'
closePreview()


const state = reactive<{
}>({

})
const {  } = state
const add = () => {

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

  .box {
    width: 100%;
    height: 3rem;
    background-color: #fff;

    span {
      margin-left: 20px;
      font-weight: bold;
      font-size: 24px;
    }
  }

  .useDiv {
    width: 96%;
    margin: 1.25rem auto;
  }
}
</style>
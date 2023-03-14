<template #default="{route,Component}">
  <div class="wrapper" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/makewheels/wheelsList' }">造轮子</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/makewheels/wheelsList">图片预览实例</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box">
      <span>图片预览示例</span>
    </div>
    <div class="useDiv">
      <AlluseDiv :name="name" />
      <div class="img">
        <img @click="preview(0, list)" src='https://picsum.photos/id/68/346/216' alt="">
        <img @click="preview(1, list)" src='https://picsum.photos/id/67/346/216' alt="">
        <img @click="preview(2, list)" src="https://picsum.photos/id/66/346/216" alt="">
      </div>
      <el-button style="margin-top: 20px;" type="primary" @click="preview1">预览</el-button>
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
  name: string
  list: {}[]
}>({
  name: '图片预览',
  list: ['https://picsum.photos/id/68/346/216', 'https://picsum.photos/id/67/346/216', 'https://picsum.photos/id/66/346/216']
})
const { name, list } = state
const preview1 = () => {
  preview(0, list)
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

    .img {
      width: 100%;
      height: 10rem;
      display: flex;
      padding: 20px 0;
      background-color: #fff;

      img {
        height: 100%;
        margin-left: 20px;
        cursor: pointer;

        &:hover {
          filter: brightness(50%);
        }
      }
    }
  }
}
</style>
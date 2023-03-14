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
        <img src="@/assets/img/BingWallpaper.jpg" alt="">
        <img src="@/assets/img/云梦秦简.jpg" alt="">
        <img src="@/assets/img/Snipaste_2022-09-25_00-10-07.png" alt="">
      </div>
    </div>

  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import 'animate.css';

const state = reactive<{
  name: string
}>({
  name: '打印表格'
})
const { name } = state
const upadtaPrintStatus = () => {

}
let printObj = reactive({
  id: "printTest", //绑定打印区域id
  popTitle: "打印表格", //内容标签

});
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
      background-color: #fff;

      img {
        height: 100%;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
<template #default="{route,Component}">
  <div class="wrapper" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/makewheels/wheelsList' }">造轮子</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/makewheels/throttle">节流示例</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="center">
      <AlluseDiv :name="name" />
      <div class="box1">
        <el-button type="primary" @click="add">点击</el-button>
        <span style="margin-left: 20px;">{{ state.num }}</span>
      </div>
      <AlluseDiv :name='name2' />
      <div class="box1">
        <el-button type="primary" @click="add1">点击</el-button>
        <span style="margin-left: 20px;">{{ state.num2 }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import { debounce, throttle } from "@/utils/index";

const state = reactive<{
  name: string
  name2: string
  num: number
  num2: number
}>({
  name: "节流",
  name2: "防抖",
  num: 0,
  num2: 0
})
const { name, name2, num, num2 } = toRefs(state)
const add = () => {
  throttle(() => {
    num.value++
  }, 1000)()
}
const add1 = () => {
  debounce(() => {
    num2.value++
  }, 1000)()
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

  .center {
    width: 96%;
    margin: 1.25rem auto;

    .box1 {
      margin: 20px;
    }
  }
}
</style>
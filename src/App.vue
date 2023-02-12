<template>
  <div>
    Hi
    <button @click="click">获取数据</button>
  </div>
  <router-view></router-view>
</template>
<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { adminLoginApi } from '@/request/api'
const click = () => {
  adminLoginApi().then(res => {
    console.log(res);
  })
}
// onMounted(() => {
//   adminLoginApi().then(res => {
//     console.log(res);

//   })
// }),
</script>
<style lang='less' scoped>

</style>
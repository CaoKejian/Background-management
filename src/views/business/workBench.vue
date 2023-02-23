<template>
  <div class="wrapper">
    <worktable />
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import worktable from './components/worktable.vue'

</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
}
</style>
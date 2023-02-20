<template>
  <div class="wrapper">
    <AnalysisTop />
    <AnalysisCenter />
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import AnalysisTop from './components/AnalysisTop.vue';
import AnalysisCenter from './components/AnalysisCenter.vue';

</script>
<style lang='less' scoped>
.wrapper {
  background-color: #f0f2f5;
  width: 100%;
  height: 100%;
}
</style>
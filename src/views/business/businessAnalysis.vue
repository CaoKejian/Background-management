<template #default="{route,Component}">
  <div class="wrapper" :class="`animate__animated ${$route.meta.transition}`">
    <AnalysisTop />
    <AnalysisCenter />
    <div class="content">
      <AnalysisDiv />
      <AnalysisDivRight />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import AnalysisTop from './components/AnalysisTop.vue';
import AnalysisCenter from './components/AnalysisCenter.vue';
import AnalysisDiv from './components/AnalysisDiv.vue';
import AnalysisDivRight from './components/AnalysisDivRight.vue';
import 'animate.css';

</script>
<style lang='less' scoped>
.wrapper {
  background-color: #f0f2f5;
  width: 100%;
  padding-bottom: 20px;
  user-select: none;

  .content {
    width: 97%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
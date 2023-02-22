<template>
  <div class="allusediv">
    <span>{{ propData.name }}</span>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
type Props = {
  name: string
}
const propData = defineProps<Props>()
</script>
<style lang='less' scoped>
.allusediv {
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;

  span {
    line-height: 3.75rem;
    margin-left: 20px;
  }
}
</style>
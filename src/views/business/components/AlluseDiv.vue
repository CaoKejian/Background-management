<template>
  <div class="allusediv">
    {{ propData.name }}
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
  width: 70%;
  background-color: red;
}
</style>
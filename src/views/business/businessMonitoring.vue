<template #default="{route,Component}">
  <div class='wrapper' :class="`animate__animated ${$route.meta.transition}`">
    <AlluseDiv :name="name" />
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import 'animate.css';
import AlluseDiv from './components/AlluseDiv.vue'

const state = reactive<{
  name: string
}>({
  name: 'ckj'
})
const { name } = toRefs(state)
</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: 120vh;
  background-color: #f0f2f5;
  background-color: skyblue;
  overflow: hidden;
}
</style>
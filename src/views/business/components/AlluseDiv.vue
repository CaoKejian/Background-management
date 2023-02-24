<template>
  <div class="allusediv">
    <span>{{ propData.name }}</span>
    <span @click="toPage('/')">{{ propData.nameActive }}</span>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
type Props = {
  name: string
  nameActive?: string
}
const propData = defineProps<Props>()
const toPage = (url: string) => {
  router.push(url)
}
</script>
<style lang='less' scoped>
.allusediv {
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;

  span {
    line-height: 3.75rem;
    margin: 0 20px;
  }

  :nth-child(2) {
    color: #39a5ff;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #5bb2f9;
      transition: all .4s;
    }
  }
}
</style>
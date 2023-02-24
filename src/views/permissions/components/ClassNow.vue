<template>
  <div class="top">
    <AlluseDiv :name="name1" />
    <div class="top-container">
      <div><span>当前权限模式：<span class="class">{{ root }}</span><button @click="changeRoot">切换权限模式</button></span></div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import AlluseDiv from '@/views/business/components/AlluseDiv.vue';
import { debounce, throttle } from "@/utils/index";


const state = reactive<{
  root: string
  name1: string
}>({
  root: '超级用户',
  name1: "当前权限",
})
const { name1, root } = toRefs(state)
const changeRoot = () => {
  if (root.value == '超级用户') {
    debounce(() => {
      root.value = '商品管理员'
    }, 1000)();
  } else {
    throttle(() => {
      root.value = '超级用户'
    }, 1000)();
  }
}
</script>
<style lang='less' scoped>
.top {
  width: 96%;
  margin: 20px auto;
  border-radius: 3px;

  &-container {
    background-color: #fff;
    height: 3.75rem;
    font-size: 14px;
    padding-left: 20px;

    div {
      position: relative;
      top: 50%;
      transform: translateY(-50%);

      .class {
        color: #0960bd;
      }

      button {
        height: 2rem;
        margin-left: 1.5rem;
        border-radius: 4px;
        color: white;
        background-color: #0960bd;
        border: none;
        cursor: pointer;

        &:hover {
          background-color: #2a7dc9;
        }

        &:active {
          color: #fff;
          background-color: #0960bd;
          transition: .3s;
        }
      }


    }
  }
}
</style>

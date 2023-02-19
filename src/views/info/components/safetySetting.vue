<template>
  <div class="safety">
    <div class="container">
      <div class="item">
        <span>账号密码</span>
        <span class="act">当前密码强度：{{ Safety.pdSafety }}</span>
      </div>
      <span class="reset">修改</span>
    </div>
    <div class="container">
      <div class="item">
        <span>密保手机</span>
        <span class="act">已绑定手机：{{ Safety.phSafety }}</span>
      </div>
      <span class="reset">修改</span>
    </div>
    <div class="container">
      <div class="item">
        <span>密保问题</span>
        <span class="act">已绑定密保：{{ Safety.mbSafety[0].is }}</span>
      </div>
      <span class="reset">设置</span>
    </div>
    <div class="container">
      <div class="item">
        <span>备用邮箱</span>
        <span class="act">已绑定邮箱：{{ Safety.mailSafety }}</span>
      </div>
      <span class="reset">修改</span>
    </div>

  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, onMounted } from 'vue'
import { SafetyApi } from '@/request/api'
const Safety = ref({
  _id: '',
  pdSafety: '',
  phSafety: '',
  mbSafety: [{
    is: '',
    ans: ''
  }],
  mailSafety: ''
})

onMounted(() => {
  SafetyApi().then(res => {
    console.log(res);
    const data = res
    data.phSafety = data.phSafety.replace(/^(.{3})(.{4})(.*)$/, '$1****$3');
    data.mailSafety = data.mailSafety.replace(/^(.{4})(.{4})(.*)$/, '$1****$3');
    Safety.value = data
  })
})
</script>
<style lang='less' scoped>
.safety {
  background-color: #fff;
  width: 100%;
  margin-top: 30px;

  .container {
    height: 6.25em;
    border-bottom: 1px solid #efefef;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .item {
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .act {
        color: #8c8c8c;
      }
    }

    .reset {
      color: #40a9ff;
    }
  }
}
</style>
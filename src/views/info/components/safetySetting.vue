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
        <span class="act">已绑定手机：{{ Safety.PhSafety }}</span>
      </div>
      <span class="reset">修改</span>
    </div>
    <div class="container">
      <div class="item">
        <span>密保问题</span>
        <span class="act">已绑定密保：{{ Safety.mbSafety }}</span>
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
import { ref, reactive, toRefs } from 'vue'
const pdSafety = ref('强')
const PhSafety = ref('18339296532')
const mbSafety = ref('我的母校')
const mailSafety = ref('1849201815@qq.com')
const info = reactive({
  Safety: {
    pdSafety: '强',
    PhSafety: "18339296532",
    mbSafety: '我的母校',
    mailSafety: "1849201815@qq.com"
  }
})
let { Safety } = toRefs(info) 
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
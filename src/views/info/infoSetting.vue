<template>
  <div class="wrapper">
    <div class="container">
      <div class="left">
        <ul>
          <li v-for="(item, index) in tabButton" :key="item.ID" @click="FnStart(index)"
            :class="index === tabIndex ? 'active' : 'li'">{{ item.text }}</li>
        </ul>
      </div>
      <div class="right">
        <div class="basic" v-if="!tabIndex">
          <div><span>基本设置</span></div>
          <InfoSetting />
        </div>
        <div class="safety" v-if="tabIndex">
          <div><span>安全设置</span></div>

        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang='ts'>
import { ref } from 'vue'
import InfoSetting from './components/infoSetting.vue'

const tabIndex = ref<number>(0)
const tabButton = ref([
  {
    ID: 1,
    text: '基本设置'
  },
  {
    ID: 2,
    text: '安全设置'
  }
])
const FnStart = (index: number) => {
  console.log(index);
  tabIndex.value = index
}

</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;

  .container {
    background-color: #fff;
    width: 95%;
    height: 95%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    display: flex;

    .left {
      width: 15.00rem;
      height: 100%;

      ul {
        width: 100%;
        margin-top: 1.875rem;

        .li {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          cursor: pointer;
          padding-left: 20px;
          position: relative;

          &:hover {
            transition: all .5s;
            color: #1890ff;
          }
        }

        .li::after {
          border-right: 3px solid transparent;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          content: "";
          transform: scaleY(.01);
        }

        .active {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          cursor: pointer;
          padding-left: 20px;
          color: #1890ff;
          font-weight: bold;
          background-color: #e6f7ff;
          transition: all .3s;
          position: relative;
        }

        .active::after {
          border-right: 3px solid #1890ff;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          content: "";
          transform: scaleY(1);
          transition: transform .3s;
        }
      }
    }

    .right {
      flex: 1;
      background-color: #fff;
      padding: 1.65rem;
      font-size: 18px;
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="box-top">
      <div class="content">
        <div class="box1">
          <span>总销售额</span>
          <span>总销售额</span>
        </div>
        <div class="box2">
          ￥ 126,560
        </div>
        <div class="box3">
          <span>周同比 12%</span>
          <span>日同比 11%</span>
        </div>
        <div class="box4">
          <span>日销售额 ￥ 12,423 </span>
        </div>
      </div>
    </div>
    <div class="box-top">
      <div class="content">
        <div class="box1">
          <span>总销售额</span>
          <span>总销售额</span>
        </div>
        <div class="box2">
          ￥ 126,560
        </div>
        <div class="box3 box-line">
        </div>
        <div class="box4">
          <span>日销售额 ￥ 12,423 </span>
        </div>
      </div>
    </div>
    <div class="box-top">
      <div class="content">
        <div class="box1">
          <span>总销售额</span>
          <span>总销售额</span>
        </div>
        <div class="box2">
          ￥ 126,560
        </div>
        <div class="box3">
          <span>周同比 12%</span>
          <span>日同比 11%</span>
        </div>
        <div class="box4">
          <span>日销售额 ￥ 12,423 </span>
        </div>
      </div>
    </div>
    <div class="box-top">
      <div class="content">
        <div class="box1">
          <span>总销售额</span>
          <span>总销售额</span>
        </div>
        <div class="box2">
          ￥ 126,560
        </div>
        <div class="box3">
          <span>周同比 12%</span>
          <span>日同比 11%</span>
        </div>
        <div class="box4">
          <span>日销售额 ￥ 12,423 </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';
onMounted(() => {
  setTimeout(() => {
    initLine()
  }, 0)
})
const initLine = () => {
  const charts = echarts.init(
    document.querySelector(".box-line") as HTMLElement
  );
  charts.setOption({
    grid: {
      //与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算
      top: "10%",
      left: '0',
      right: '0',
      bottom: "10%",
    },
    xAxis: {
      show: false,
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        data: [1, 4, 1, 5, 2, 3, 2, 4, 2, 1.5, 3, 2, 4, 3, 2],
        type: 'line',
        showSymbol: false,
        smooth: true
      }
    ]
  })
}
</script>
<style lang='less' scoped>
.container {
  width: 100%;
  min-width: 80rem;
  height: auto;
  display: flex;
  justify-content: space-around;

  .box-top {
    height: 9.5em;
    width: 20%;
    min-width: 250px;
    margin-top: 1.875em;
    background-color: #fff;
    padding: 20px;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .box1 {
        color: #8c8c8c;
        font-size: 14px;
      }

      .box2 {
        font-size: 24px;
        height: 2.0em;
        line-height: 2em;
      }

      .box3 {
        width: 100%;
        height: 4.5em;
        font-size: 14px;
        line-height: 4.5em;
        border-bottom: 1px solid #efefef;

      }

      .box4 {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="box-top">
      <div class="content">
        <div class="box1">
          <span>总销售额</span>
          <el-tooltip class="box-item" effect="dark" content="指标说明" placement="top">
            <el-icon>
              <WarningFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <div class="box2">
          ￥ 126,560
        </div>
        <div class="box3">
          <div>
            <span>周同比 12%<el-icon>
                <CaretTop color="#f5222d" />
              </el-icon></span>
            <span>日同比 11%<el-icon>
                <CaretBottom color="#52c41a" />
              </el-icon></span>
          </div>
        </div>
        <div class="box4">
          <span>日销售额 ￥ 12,423 </span>
        </div>
      </div>
    </div>
    <div class="box-top">
      <div class="content">
        <div class="box1">
          <span>访问量</span>
          <el-tooltip class="box-item" effect="dark" content="指标说明" placement="top">
            <el-icon>
              <WarningFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <div class="box2">
          8,846
        </div>
        <div class="box3 box-line">
        </div>
        <div class="box4">
          <span>日访问量 1,234 </span>
        </div>
      </div>
    </div>
    <div class="box-top">
      <div class="content">
        <div class="box1">
          <span>支付笔数</span>
          <el-tooltip class="box-item" effect="dark" content="指标说明" placement="top">
            <el-icon>
              <WarningFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <div class="box2">
          6,560
        </div>
        <div class="box3 box-zhu"></div>
        <div class="box4">
          <span>转换率 60% </span>
        </div>
      </div>
    </div>
    <div class="box-top">
      <div class="content">
        <div class="box1">
          <span>活动效果</span>
          <el-tooltip class="box-item" effect="dark" content="指标说明" placement="top">
            <el-icon>
              <WarningFilled />
            </el-icon>
          </el-tooltip>
        </div>
        <div class="box2">
          78%
        </div>
        <div class="box3">
          <el-progress :percentage="78" :stroke-width="15" color='#1fc5c5' stroke-linecap='butt' />
        </div>
        <div class="box4">
          <span>周同比 12%<el-icon>
              <CaretTop color="#f5222d" />
            </el-icon></span>
          <span>日同比 11%<el-icon>
              <CaretBottom color="#52c41a" />
            </el-icon></span>
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
    initZhu()
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
      left: '-10%',
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
        smooth: true,
        areaStyle: {
          color: '#c5a5f0'
        },
        lineStyle: {
          color: '#9861e3'
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#a76af9'
        }
      },
    }
  })
}
const initZhu = () => {
  const charts = echarts.init(
    document.querySelector(".box-zhu") as HTMLElement
  );
  charts.setOption({
    grid: {
      //与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算
      top: "10%",
      left: '-10%',
      right: '0',
      bottom: "10%",
    },
    xAxis: {
      show: false,
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
          color: "#6395f9"
        }
      },
    ],
    tooltip: {
      trigger: 'axis', //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
      axisPointer: {// 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
  })
}
</script>
<style lang='less' scoped>
.container {
  cursor: pointer;
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
        display: flex;
        justify-content: space-between;
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
        border-bottom: 1px solid #efefef;

        div {
          line-height: 4.0em;
        }
      }

      .box4 {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
</style>
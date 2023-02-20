<template>
  <div class="wrapper1">
    <div class="title">
      <div class="container">
        <div>线上热门搜索</div>
        <el-icon>
          <WarningFilled />
        </el-icon>
      </div>
    </div>
    <div class="center">
      <div class="left">
        <div class="top">
          <span>搜索用户数</span>
          <el-icon>
            <WarningFilled color=" #a2a2a2" />
          </el-icon>
        </div>
        <div class="center1">
          <span class="span1">12,321</span>
          <span class="span2">
            17.1
            <el-icon>
              <CaretTop color="#f5222d" />
            </el-icon>
          </span>
        </div>
        <div class="bottom"></div>
      </div>
      <div class="right">
        <div class="top">
          <span>人均搜索次数</span>
          <el-icon>
            <WarningFilled color=" #a2a2a2" />
          </el-icon>
        </div>
        <div class="center1">
          <span class="span1">2.7</span>
          <span class="span2">
            26.2
            <el-icon>
              <CaretBottom color="#52c41a" />
            </el-icon>
          </span>
        </div>
        <div class="bottom1"></div>
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
    initLine1()
  }, 0)
})

const initLine = () => {
  const charts = echarts.init(
    document.querySelector('.bottom') as HTMLElement
  )
  charts.setOption({
    grid: {
      //与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算
      top: "10%",
      left: '0%',
      right: '10%',
      bottom: "30%",
    },
    xAxis: {
      show: false,
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        data: [1, 3, 2, 4, 1.5, 4, 2.5, 1],
        type: 'line',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: '#f1f5fe'
        },
        lineStyle: {
          color: '#89affb'
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#89affb'
        }
      },
    }
  })
}
const initLine1 = () => {
  const charts = echarts.init(
    document.querySelector('.bottom1') as HTMLElement
  )
  charts.setOption({
    grid: {
      //与绝对定位相似，top，left，right，bottom 设定是根据上级盒子宽高来计算
      top: "10%",
      left: '0%',
      right: '10%',
      bottom: "30%",
    },
    xAxis: {
      show: false,
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        data: [1, 3, 2, 4, 1.5, 4, 2.5, 1],
        type: 'line',
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: '#f1f5fe'
        },
        lineStyle: {
          color: '#89affb'
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#89affb'
        }
      },
    }
  })
}

</script>
<style lang='less' scoped>
.wrapper1 {
  width: 48.75rem;
  height: auto;
  margin-top: 20px;
  margin-left: 1.375rem;
  background-color: #fff;

  .title {
    width: 100%;
    border-bottom: 1px solid #efefef;
    padding: 1.25rem 0;

    .container {
      width: 95%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }

  .center {
    width: 100%;
    height: 12.5rem;
    display: flex;

    .left,
    .right {
      width: 50%;
      height: 12.5rem;
      padding: 1rem;

      .top {
        height: 2.5rem;
        line-height: 2.5rem;
        display: flex;
        align-items: center;

        span {
          margin-right: 10px;
          color: #a2a2a2;

        }
      }

      .center1 {
        height: 2.5rem;
        line-height: 2.5rem;

        .span1 {
          font-size: 20px;
          font-weight: bold;
        }

        .span2 {
          font-size: 14px;
          color: #a2a2a2;
          margin-left: 20px;
        }
      }

      .bottom {
        width: 90%;
        height: 7.5rem;
      }

      .bottom1 {
        width: 90%;
        height: 7.5rem;
      }
    }

  }
}
</style>
<template>
  <div class="container">
    <div class="box">
      <div class="box-box1">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="销售额" name="销售额">
            <div class="zhu"></div>
          </el-tab-pane>
          <el-tab-pane label="访问量" name="访问量">
            <div class="zhu2"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="box-box2">
        <el-tabs v-model="activeName1" class="demo-tabs">
          <el-tab-pane label="今日" name="first">
            <div class="panel">
              <span class="panel-span">门店销售额排名</span>
              <ul class="ul">
                <li v-for="(item, index) in shoparr" :key="index">
                  <span :class="item.id <= 3 ? 'active' : 'promail'">{{ item.id }}</span>
                  <span>{{ item.name }}</span>
                  <span>{{ item.value }}</span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="本周" name="second">Config</el-tab-pane>
          <el-tab-pane label="本月" name="third">Role</el-tab-pane>
          <el-tab-pane label="本年" name="fourth">Task</el-tab-pane>
         
        </el-tabs>
      </div>
    </div>

  </div>
</template>
<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';
import type { TabsPaneContext } from 'element-plus'
onMounted(() => {
  setTimeout(() => {
    initZhu1()
    initZhu2()
  }, 0)
})
const shoparr = ref([{
  id: 1,
  name: "1号店",
  value: "321,111"
},
{
  id: 2,
  name: "2号店",
  value: "321,111"
},
{
  id: 3,
  name: "3号店",
  value: "321,111"
}])
const activeName = ref('销售额')
const activeName1 = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const initZhu1 = () => {
  const charts = echarts.init(
    document.querySelector(".zhu") as HTMLElement
  );
  charts.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: "10",
      left: '3%',
      right: '0%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '月销量',
        type: 'bar',
        barWidth: '60%',
        data: [150, 530, 200, 830, 690, 330, 1020, 990, 225, 640, 230, 740],
        itemStyle: {
          color: "#6395f9"
        }
      }
    ]
  })
}
const initZhu2 = () => {
  const charts = echarts.init(
    document.querySelector(".zhu2") as HTMLElement
  );
  charts.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: "10",
      left: '3%',
      right: '0%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '月销量',
        type: 'bar',
        barWidth: '60%',
        data: [150, 530, 200, 830, 690, 330, 1020, 990, 225, 640, 230, 740],
        itemStyle: {
          color: "#6395f9"
        }
      }
    ]
  })
}
</script>
<style lang='less' scoped>
:deep(.el-tabs__nav is-top) {
  width: 30%;
}

.container {
  width: 100%;
  height: auto;

  .box {
    background-color: #fff;
    width: 95%;
    margin: 0 auto;
    margin-top: 1.875em;
    padding: 20px;
    display: flex;

    &-box1 {
      width: 70%;

      .zhu,
      .zhu2 {
        width: 65em;
        height: 18em;
      }

      :deep(.el-tabs__nav-scroll) {
        width: 65em;
      }
    }

    &-box2 {
      flex: 1;

      .panel {
        &-span {
          font-size: 14px;
        }

        .ul {
          margin-top: 20px;

          li {
            display: flex;
            align-items: center;

            .promail {
              width: 10%;
              display: block;
              width: 1.25rem;
              height: 1.25rem;
            }

            .active {
              width: 10%;
              display: block;
              width: 1.25rem;
              height: 1.25rem;
              border-radius: 50%;
              background-color: #314659;
              color: #fff;
              font-size: 12px;
              line-height: 1.25rem;
              text-align: center;
            }

            span {
              margin-bottom: 10px;

              &:nth-child(2) {
                width: 70%;
                margin-left: 10px;
              }

              &:nth-child(3) {
                width: 20%;
              }
            }
          }
        }
      }
    }
  }


}
</style>
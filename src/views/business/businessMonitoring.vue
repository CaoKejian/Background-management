<template #default="{route,Component}">
  <div class='wrapper' :class="`animate__animated ${$route.meta.transition}`">
    <div class="top">
      <div class="top-div">
        <AlluseDiv :name="name1" />
        <div class="top-div-bottom">
          <div class="top-top">
            <div class="box1">
              <span>今日交易总额</span>
              <span>124,543,233元</span>
            </div>
            <div class="box1">
              <span>销售目标完成率</span>
              <span>92%</span>
            </div>
            <div class="box1">
              <span>活动剩余时间</span>
              <span>活动剩余时间</span>
            </div>
            <div class="box1">
              <span>每秒交易总额</span>
              <span>234元</span>
            </div>
          </div>
          <div class="top-bottom">地图</div>
        </div>
      </div>
      <div class="right">
        <div class="right-div">
          <AlluseDiv :name="name2" />
        </div>
        <div class="right-div">
          <AlluseDiv :name="name3" />
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, onMounted } from 'vue'
import 'animate.css';
import * as echarts from 'echarts';
import AlluseDiv from './components/AlluseDiv.vue'
import '@/assets/china.js'
import { getChinaApi } from '@/request/api'

const state = reactive<{
  name1: string
  name2: string
  name3: string
}>({
  name1: '活动实时交易情况',
  name2: '活动情况预测',
  name3: '券核效率',
})
const { name1, name2, name3 } = toRefs(state)
onMounted(() => {
  getChinaApi().then(res => {
    console.log(res);
  })
  setTimeout(() => {
    initChina()
  }, 0);
})
const initChina = () => {
  const data = [
    {
      name: "内蒙古",
      itemStyle: {
        areaColor: "#56b1da",
      },
      value: [110.3467, 41.4899]
    },
  ];
  const charts = echarts.init(document.querySelector('.top-bottom') as HTMLElement)
  charts.setOption({
    backgroundColor: "#fff",
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "120%",

      itemStyle: {
        // normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        // },
      },
      emphasis: {
        areaColor: "#0f5d9d",
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            // normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            // },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        selectedMode: "multiple",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "140%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
          emphasis: {
            borderWidth: .50,
            areaColor: "#56b1da",
          }
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },

        },
        data: data,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        symbol: 'pin',
        symbolSize: [55, 55],
        label: {
          show: true,
          color: "#FFF",
        },
        itemStyle: {
          color: '#328fee', //标志颜色
        },
        data: data,
      },
    ],
  })
}

</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: 120vh;
  background-color: #f0f2f5;
  overflow: hidden;

  .top {
    width: 95%;
    height: 39.0625rem;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    &-div {
      width: 74%;

      &-bottom {
        width: 100%;
        height: 35.3125rem;
        background-color: #fff;

        .top-bottom {
          width: 100%;
          height: 80%;

          :deep(canvas) {
            background-color: #fff;
          }
        }

        .top-top {
          display: flex;
          padding: 1.625rem;

          .box1 {
            width: 20%;
            display: flex;
            flex-direction: column;

            :nth-child(1) {
              color: #8c8c8c;
            }

            :nth-child(2) {
              margin-top: 10px;
              font-size: 20px;
            }
          }
        }
      }
    }

    .right {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

    }

  }
}
</style>
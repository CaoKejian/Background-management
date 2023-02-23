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
              <span>活动进度</span>
              <span>活动进度</span>
            </div>
            <div class="box1">
              <span>每秒交易总额</span>
              <span>234元</span>
            </div>
          </div>
          <div class="top-bottom"></div>
        </div>
      </div>
      <div class="right">
        <div class="right-div">
          <AlluseDiv :name="name2" />
          <div style="color:#000" class="right-div-bottom">
            <table class="table" cellspacing="0" border="1">
              <thead>
                <tr>
                  <th>地区</th>
                  <th>累计收入</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in  useChina.item " :key="index">
                  <td align="center">{{ item.name }}</td>
                  <td align="center">{{ item.total.confirm }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-div">
        <div class="bottom-div-item">
          <AlluseDiv :name="name3" />
          <div class="bottom-div-item-process">
            <el-progress type="circle" :percentage="25" color="#fab120" />
            <el-progress type="circle" :percentage="32" color="#65e0d1" />
            <el-progress type="circle" :percentage="65" color="#3ac563" />
          </div>
        </div>
        <div class="bottom-div-item">
          <AlluseDiv :name="name4" />
          <div class="bottom-div-panel">
          </div>
        </div>
        <div class="bottom-div-item">
          <AlluseDiv :name="name5" />
          <div class="bottom-div-ball">
          </div>
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
import { geoCoordMap } from "@/assets/geoCoordMap"
import { useChinaStore } from '@/stores/china'
import 'echarts-liquidfill'

const useChina = useChinaStore()
type valueObj = {
  name: string
  value: []
  children: {}[]
}

interface valueRes {
  data: valueObj
}

const state = reactive<{
  name1: string
  name2: string
  name3: string
  name4: string
  name5: string
}>({
  name1: '活动实时交易情况',
  name2: '活动收入监测',
  name3: '各品类占比',
  name4: '券核效率',
  name5: '资源剩余',
})
const { name1, name2, name3, name5, name4 } = toRefs(state)
onMounted(async () => {
  await useChina.getList()
  setTimeout(() => {
    initChina()
    initPanel()
    initball()
  }, 0);
})
const initChina = () => {
  const city = useChina.list.areaTree[2].children;
  useChina.item = city[2].children;
  const data = city.map((v) => {
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.total.confirm),
      children: v.children,
    };
  });
  const charts = echarts.init(document.querySelector(".top-bottom") as HTMLElement);
  charts.setOption({
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
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "150%",
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
          // normal: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
          //},
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
        type: "scatter",
        coordinateSystem: "geo",
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        symbol: "pin",
        symbolSize: [55, 55],
        label: {
          // normal: {
          show: true,
          color: "#FFF",
          formatter(value: any) {
            return value.data.value[2];
          },
          // },
        },
        itemStyle: {
          // normal: {
          color: "#328fee", //标志颜色
          // },
        },
        data: data,
      },
    ],
  });

  charts.on("click", (e: any) => {
    useChina.item = e.data.children;
  });
};
const initPanel = () => {
  const charts = echarts.init(document.querySelector('.bottom-div-panel') as HTMLElement)
  charts.setOption({
    backgroundColor: '#fff',
    series: [
      {
        type: 'gauge',
        radius: '90%', //显示比例
        progress: {
          show: true,
          width: 18
        },
        axisLine: {
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          length: 5,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 20,
          color: '#999',
          fontSize: 10
        },
        title: {
          show: true,
          offsetCenter: ['25%', '70%'],
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 20,
            color: "#000",
          }
        },
        detail: {
          valueAnimation: true,
          fontSize: 20,
          offsetCenter: ['-10%', '70%'],
          formatter: `{value}`,
          textStyle: { color: '#000', fontSize: 20 },
        },
        data: [
          {
            value: 70,
            name: "优"
          }
        ]
      }
    ]
  })
}
const initball = () => {
  const charts = echarts.init(document.querySelector('.bottom-div-ball') as HTMLElement)
  charts.setOption({
    backgroundColor: '#fff', //背景色
    series: [
      {
        type: 'liquidFill', //水位图
        radius: '90%', //显示比例
        center: ['50%', '50%'], //中心点
        amplitude: 10, //水波振幅
        data: [0.5, .5, .5], // data个数代表波浪数
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#6193fa',
              },
              {
                offset: 1,
                color: '#2ca3e2',
              },
            ],
            globalCoord: false,
          },
        ], //波浪颜色
        backgroundStyle: {
          borderWidth: 5, //外边框
          borderColor: '#fff', //边框颜色
          color: '#fff', //边框内部填充部分颜色
        },
        label: {
          //标签设置
          position: ['50%', '75%'],
          formatter: '50%', //显示文本,
          textStyle: {
            fontSize: '32px', //文本字号,
            color: '#fff',
          },
        },
        outline: {
          show: true,
          borderDistance: 0,
          itemStyle: {
            borderWidth: 2,
            borderColor: '#112165',
          },
        },
      },
    ],
  })
}

</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: auto;
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
      overflow: hidden;

      &-div {
        width: 100%;
        overflow: hidden;

        &-bottom {
          width: 100%;
          height: 35.3125rem;
          overflow-y: scroll;
          background-color: #fff;
        }
      }
    }

  }

  .bottom {
    width: 95%;
    margin: 1.25rem auto;

    // height: 16.3125rem;
    &-div {
      width: 100%;
      display: flex;
      justify-content: space-between;



      &-item {
        width: 25%;

        &:nth-child(1) {
          width: 45%;
        }

        &-process {
          background-color: #fff;
          height: 12.5rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .bottom-div-panel,
        .bottom-div-ball {
          width: 100%;
          height: 12.5rem;
        }
      }
    }
  }
}

.right-div-bottom::-webkit-scrollbar {
  width: 0 !important
}

.table {
  width: 90%;
  max-height: 35.3125rem;
  margin: 20px auto;
  border: 1px solid #d9d9d9;

  tr {
    th {
      padding: 5px;
      border-right: 0.5px solid #d9d9d9;
      border-top: 0.5px solid #d9d9d9;
      white-space: nowrap;
    }

    td {
      padding: 5px 10px;
      width: 100px;
      border-right: 0.5px solid #d9d9d9;
      border-top: 0.5px solid #d9d9d9;
      white-space: nowrap;
    }
  }
}
</style>
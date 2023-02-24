<template>
  <div class="wrapper">
    <worktable />
    <div class="container">
      <div class="left">
        <div class="left-box1">
          <AlluseDiv :name="name1" :name-active="nameActive1" />
          <div class="traverse">
            <div class="div" v-for="(item, index) in itemIng" :key="index">
              <div class="div-item1">
                <svg-icon class="svg" :name=item.icon />
                <div>{{ item.name }}</div>
              </div>
              <div class="div-item2">{{ item.content }}</div>
              <div class="div-item3">{{ item.user }}</div>
            </div>
          </div>
        </div>
        <div class="left-box2">
          <AlluseDiv :name="name3" />
          <div class="content">
            <ul>
              <li v-for="(item, index) in  6" :key="index">
                Colin 在 微信设计天团 新建项目 2/23迭代 几秒前
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-box1">
          <AlluseDiv :name="name2" />
          <div class="traverse">
            <div class="div" v-for="(item, index) in   itemGo" :key="index">
              <div><a :href=item.from>{{ item.to }}</a></div>
            </div>
          </div>
        </div>
        <div class="right-box2">
          <AlluseDiv :name="name4" />
          <div class="echart-leida"></div>
        </div>
        <div class="right-box3">
          <AlluseDiv :name="name5" />
          <div class="right-box3-content">
            <ul>
              <li>
                <svg-icon class="icon" name="wechart" />
                <span><a href="/">科学搬砖组</a></span>
              </li>
              <li>
                <svg-icon class="icon" name="wechart" />
                <span><a href="/">科学搬砖组</a></span>
              </li>
              <li>
                <svg-icon class="icon" name="wechart" />
                <span><a href="/">科学搬砖组</a></span>
              </li>
              <li>
                <svg-icon class="icon" name="wechart" />
                <span><a href="/">科学搬砖组</a></span>
              </li>
              <li>
                <svg-icon class="icon" name="wechart" />
                <span><a href="/">科学搬砖组</a></span>
              </li>
              <li>
                <svg-icon class="icon" name="wechart" />
                <span><a href="/">科学搬砖组</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, onMounted } from 'vue'
import worktable from './components/worktable.vue'
import AlluseDiv from './components/AlluseDiv.vue';
import { getItemUsingApi } from '@/request/api';
import * as echarts from 'echarts'


const state = reactive<{
  name1: string
  name2: string
  name3: string
  name4: string
  name5: string
  nameActive1: string
  itemIng: {
    icon: string
    name: string
    user: string
    content: string
  }[]
  itemGo: {
    to: string,
    id: number,
    from: string
  }[]
}>({
  name1: '进行中的项目',
  name2: '快速开始 / 便捷导航',
  name3: '动态',
  name4: '指数',
  name5: '团队',
  nameActive1: "全部项目",
  itemIng: [{
    icon: "",
    name: "",
    user: "",
    content: ""
  }],
  itemGo: [
    { to: '业务分析', id: 1, from: '/business/businessAnalysis' },
    { to: '个人中心', id: 2, from: '/info/infoCenter' },
    { to: '添加商品', id: 3, from: '' },
    { to: '业务分析', id: 4, from: '' },
    { to: '权限分配', id: 5, from: '' },
    { to: '客户', id: 6, from: '' },
  ]
})
const { name1, name2, name3, name4, name5, nameActive1, itemIng, itemGo } = toRefs(state)

onMounted(() => {
  initData()
  setTimeout(() => {
    initLeida()
  }, 0)
})
const initData = () => {
  getItemUsingApi().then(res => {
    itemIng.value = res.data
  })
}
const initLeida = () => {
  const charts = echarts.init(document.querySelector('.echart-leida') as HTMLElement)
  charts.setOption({
    title: {
      show: false,
      text: 'Basic Radar Chart'
    },
    backgroundColor: '#fff',
    legend: {
      data: ['个人', '团队']
    },
    radar: {
      shape: 'circle',
      indicator: [
        { name: '引用', max: 6500 },
        { name: '热度', max: 16000 },
        { name: '贡献', max: 30000 },
        { name: '产量', max: 38000 },
        { name: '口碑', max: 52000 },
      ]
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },//鼠标移入显示数据形式
    series: [
      {
        name: '指标',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: '个人',
            label: {
              show: false,
            },//图中显示具体数字
            // areaStyle: {
            //   color: '#5470c6'
            // }
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: '团队',
            // areaStyle: {
            //   color: '#91cc75'
            // }
          }
        ]
      }
    ]
  })
}
</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  // height: 100vh;
  background-color: #f0f2f5;

  .container {
    width: 98%;
    margin: 1.25rem auto;
    min-width: 68.75rem;
    display: flex;
    justify-content: space-between;

    .left {
      width: 66%;

      &-box1 {
        width: 100%;
        height: 18.75rem;
        background-color: #fff;

        .traverse {
          width: 100%;
          height: 80%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          overflow: hidden;

          .div {
            width: 33.33%;
            height: 50%;
            box-sizing: border-box;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &-item1 {
              display: flex;
              align-items: center;

              div {
                margin-left: 10px;
                font-weight: bold;
              }

              .svg {
                font-size: 24px;
                border-radius: 50%
              }
            }

            &-item2 {
              font-size: 14px;
              color: #8c8c8c;
            }

            &-item3 {
              font-size: 14px;
              color: #616060;
            }
          }
        }
      }

      &-box2 {
        width: 100%;
        margin: 20px 0;
        background-color: #fff;

        .content {
          width: 96%;
          margin: 1.25rem auto;

          ul {
            li {
              line-height: 60px;
              padding: 0 1.5rem;
              font-size: 14px;
              height: 80px;
              border-bottom: 1px solid #efefef;

              &:nth-last-child(1) {
                border: none;
              }
            }
          }
        }
      }
    }

    .right {
      width: 32%;

      &-box1 {
        height: 9rem;
        background-color: #fff;

        .traverse {
          box-sizing: border-box;
          width: 100%;
          height: 50%;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-start;

          .div {
            width: 25%;
            height: 50%;
            cursor: pointer;

            &:hover {
              color: #419eff;
              transition: all .3s;
            }
          }
        }
      }

      &-box2 {
        margin-top: 20px;
        height: 24rem;

        .echart-leida {
          width: 100%;
          height: 100%;
        }
      }

      &-box3 {
        margin-top: 80px;
        margin-bottom: 20px;
        height: 16rem;
        background-color: #fff;

        &-content {
          width: 100%;
          // height: 100%;

          ul {
            height: 10rem;
            display: flex;
            flex-wrap: wrap;
            padding: 20px 30px;

            li {
              width: 50%;
              height: 33.33%;
              display: flex;
              align-items: center;

              span {
                margin-left: 10px;
              }
            }
          }

        }
      }
    }
  }

}

a {
  text-decoration: none;
  cursor: pointer;
  color: #000;
}
</style>
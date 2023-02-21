<template>
  <div class="wrapper1">
    <div class="title">
      <div class="container">
        <div class="container-title">销售额类别占比</div>
        <el-radio-group v-model="radio1" size="small">
          <el-radio-button label="全部渠道" @click="click1(1)" />
          <el-radio-button label="线上" @click="click1(2)" />
          <el-radio-button label="门店" @click="click1(3)" />
        </el-radio-group>
        <el-icon>
          <MoreFilled color="#b2b2b2" />
        </el-icon>
      </div>
    </div>
    <div class="center">
      <span>销售额</span>
      <div class="pie"></div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, onMounted, reactive, toRefs } from 'vue'
import * as echarts from 'echarts';

const radio1 = ref('全部渠道')
const state = reactive<{
  pirData: {
    value: number
    name: string
  }[]
}>({
  pirData: [{ value: 65, name: '其他' },
  { value: 99, name: '家用电器' },
  { value: 188, name: '食用酒水' },
  { value: 255, name: '服饰箱包' },
  { value: 322, name: '个人零食' }]
})
let { pirData } = toRefs(state)
const click1 = (data: number) => {
  if (data === 1) {
    state.pirData = [
      { value: 1231, name: '其他' },
      { value: 1231, name: '母婴产品' },
      { value: 411, name: '服饰箱包' },
      { value: 3111, name: '个护健康' },
      { value: 3221, name: '食用酒水' },
      { value: 2144, name: '家用电器' }]
    initPie()
  } if (data === 2) {
    state.pirData = [
      { value: 111, name: '其他' },
      { value: 121, name: '母婴产品' },
      { value: 41, name: '服饰箱包' },
      { value: 311, name: '个护健康' },
      { value: 321, name: '食用酒水' },
      { value: 244, name: '家用电器' }]
    initPie()
  } if (data === 3) {
    state.pirData = [
      { value: 65, name: '其他' },
      { value: 99, name: '家用电器' },
      { value: 188, name: '食用酒水' },
      { value: 255, name: '服饰箱包' },
      { value: 322, name: '个人零食' }]
    initPie()
  }
}
onMounted(() => {
  setTimeout(() => {
    initPie()
  }, 0)
})
const initPie = () => {
  const charts = echarts.init(
    document.querySelector('.pie') as HTMLElement
  )
  charts.setOption({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '销售额',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: `总销售额\n707`,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            formatter: `{b}\n{c}`,
            fontSize: 20,
            fontWeight: 'bold'
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        labelLine: {
          show: false,
        },
        data: state.pirData,
      }
    ]
  })
}
</script>
<style lang='less' scoped>
.wrapper1 {
  cursor: pointer;
  width: 49.75rem;
  height: auto;
  margin-top: 20px;
  // margin-left: 1.375rem;
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

      &-title {
        width: 60%;
      }


    }
  }

  .center {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;

    .pie {
      width: 100%;
      height: 25rem;


    }
  }
}
</style>
<template #default="{route,Component}">
  <div class="wrapper" :class="`animate__animated ${$route.meta.transition}`">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/makewheels/wheelsList' }">造轮子</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/makewheels/wheelsList">打印</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box">
      <span>打印示例</span>
    </div>
    <div class="useDiv">
      <AlluseDiv :name="name" />
      <div>
        <div ref="printTest" id="printTest" class="print">
          <table>
            <thead>
              <tr>
                <th>名字</th>
                <th>学号</th>
                <th>年龄</th>
                <th>公司</th>
              </tr>
            </thead>
            <tbody>
              <td>
              <th>Colin</th>
              <th>2001****37</th>
              <th>21</th>
              <th>阿里妈妈</th>
              </td>
            </tbody>
          </table>
        </div>
        <!-- v-print指令可以直接绑定到对应的打印区域-->
        <div class="print-button">
          <el-button style="margin-top: 20px;" v-print="printObj" type="primary" size="default"
            @click="upadtaPrintStatus">打印</el-button>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import AlluseDiv from '../business/components/AlluseDiv.vue';
import 'animate.css';

const state = reactive<{
  name: string
}>({
  name: '打印表格'
})
const { name } = state
const upadtaPrintStatus = () => {

}
let printObj = reactive({
  id: "printTest", //绑定打印区域id
  popTitle: "打印表格", //内容标签

});
</script>
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 3rem);
  overflow: hidden;
  background-color: #f0f2f5;

  .header {
    width: 100%;
    height: 3.75rem;
    background-color: #fff;

    :deep(.el-breadcrumb) {
      position: relative;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }
  }

  .box {
    width: 100%;
    height: 3rem;
    background-color: #fff;

    span {
      margin-left: 20px;
      font-weight: bold;
      font-size: 24px;
    }
  }

  .useDiv {
    width: 96%;
    margin: 1.25rem auto;
  }
}

table {
  display: flex;
  flex-direction: column;
  background-color: #fff;


  thead {
    height: 2rem;
    line-height: 2rem;

    th {
      width: 12.5rem;
    }
  }

  tbody {
    height: 2rem;
    line-height: 2rem;

    th {
      width: 12.5rem;
    }
  }
}
</style>
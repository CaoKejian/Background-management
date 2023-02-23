<template>
  <div class="wapper-top">
    <div class="container">
      <div class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">businessAnalysiss</el-breadcrumb-item>
          <el-breadcrumb-item>workBench</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="center">
        <span>工作台</span>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <img src="@/assets/img/our.jpg" alt="">
          <div>
            <span>早安，Colin，祝你开心每一天！</span>
            <span>Web专家|Vue使用者-阿里妈妈|前端技术部</span>
          </div>
        </div>
        <div class="bottom-right">
          <table>
            <thead>
              <tr>
                <th>项目数</th>
                <th>团队内排名</th>
                <th>项目访问</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>56</td>
                <td>8/24</td>
                <td>2,223</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'

</script>
<style lang='less' scoped>
.wapper-top {
  width: 100%;
  min-width: 53.75rem;
  background-color: #fff;

  .container {
    width: 97%;
    height: 100%;
    padding: 1rem 0;
    margin: 0 auto;

    .center {
      height: 3rem;
      line-height: 3rem;
      font-weight: bold;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-left {

        display: flex;
        align-items: center;

        div {
          margin-left: 20px;
          height: 4.25rem;
          display: flex;
          justify-content: space-between;
          flex-direction: column;

          :nth-child(1) {
            font-size: 20px;
          }

          :nth-child(2) {
            font-size: 14px;
            letter-spacing: 1px;
            color: #8c8c8c;
          }
        }

        img {
          width: 5.4rem;
          height: 5.4rem;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      &-right {
        width: 20%;
        height: 4.25rem;

        table {
          display: flex;
          flex-direction: column;
          align-items: stretch;

          thead {
            height: 2.125rem;

            th {
              color: #8c8c8c;
            }
          }

          tbody {
            height: 2.125rem;

            td {
              font-size: 24px;
            }
          }

          tr {

            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
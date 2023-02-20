<template #default="{route,Component}">
  <div class="wrapper" :class="`animate__animated ${$route.meta.transition}`">
    <div class="container">
      <div class="left">
        <div class="info">
          <img src="@/assets/img/our.jpg" alt="">
          <h1>Colin Cao</h1>
          <span>海纳百川，有容乃大</span>
        </div>
        <div class="workInfo">
          <div class="item">
            <svg-icon name="vue" class="logo-svg" />
            <span>vue开发工程师</span>
          </div>
          <div class="item">
            <svg-icon name="gongsi" class="logo-svg" />
            <span>阿里妈妈 - 某某某事业群 - 某某平台部 - 某某技术部 - 普通员工</span>
          </div>
          <div class="item">
            <svg-icon name="home" class="logo-svg" />
            <span>河南省郑州市</span>
          </div>
        </div>
        <div class="item-biaoqian">
          <div class="content">
            <h1>标签</h1>
            <div>
              <span>Vue</span><span>有创意的人</span><span>185</span>
            </div>
          </div>
        </div>
        <div class="club">
          <div class="content">
            <h1>团队</h1>
            <span><svg-icon class="icon" name="wechart" />微信开发</span><span><svg-icon class="icon"
                name="pay" />支付宝</span><span><svg-icon class="icon" name="qq" />骗你来学计算机</span>
          </div>
        </div>
      </div>
      <div class="right">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="文章" name="first">
            <Article />
          </el-tab-pane>
          <el-tab-pane label="应用" name="second">应用</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Article from './components/article.vue'
import 'animate.css';

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang='less' scoped>
.wrapper {
  background-color: #f0f2f5;
  height: 55.5625rem;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;

  .container {
    width: 95%;
    height: 95%;
    position: relative;
    // top: 50%;
    left: 50%;
    top: 2.125rem;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;

    .left {

      width: 28.9375rem;
      height: 43.4375rem;
      background-color: #fff;
      border-radius: 5px;
      min-width: 15rem;


      .info {
        cursor: pointer;
        margin: 1.25rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-weight: bold;
          margin-top: 1.25em;
        }

        span {
          margin-top: .65em;
          font-size: 14px;
        }

        img {
          width: 6.25rem;
          height: 6.25em;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      .workInfo {
        cursor: pointer;
        width: 90%;
        margin: 0 auto;
        font-size: 14px;

        .item {
          margin-bottom: 0.3125rem;

          span {
            margin-left: 0.3125rem;
            color: #262626;
          }
        }
      }

      .item-biaoqian {
        width: 90%;
        margin: 0 auto;
        margin-top: 20px;
        color: #676565;
        padding: 20px 0;
        border-top: 1px dashed rgba(0, 0, 0, .06);
        border-bottom: 1px dashed rgba(0, 0, 0, .06);

        .content {

          h1 {
            margin-top: .5rem;
            margin-bottom: 0.625rem;
          }

          span {
            padding: 2px 4px;
            background-color: #fafafa;
            font-size: 12px;
            border: 1px solid #d9d9d9;
            margin-right: 0.625em;
          }
        }
      }

      .club {
        width: 90%;
        margin: 0 auto;
        margin-top: 20px;
        color: #676565;
        padding: 20px 0;

        .content {

          h1 {
            margin-top: .5rem;
            margin-bottom: 0.625rem;
          }

          span {
            padding: 2px 4px;
            font-size: 16px;
            margin-right: 1.625em;

            .icon {
              cursor: pointer;

              margin-right: 10px;
            }
          }
        }
      }
    }

    .right {
      flex: 1;
      margin-left: 1.25em;
      background-color: #fff;
      border-radius: 5px;
      padding: 0 10px;
    }
  }

}
</style>
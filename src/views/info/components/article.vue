<template>
  <div class="article">
    <div class="article-item" v-for="(item, index) in articleArr" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div class="biaoqian">
        <span v-for="(i, index) in item.item" :key="index">{{ i }}</span>
      </div>
      <span class="content">段落示意：{{ item.content }}</span>
      <div class="publishInfo">
        <svg-icon name="wechart" class="icon" />
        <span class="user">{{ item.user }}</span>
        <span class="write">发布在</span>
        <a href='{item.webhttp}'>{{ item.webhttp }}</a>
        <span class="time">{{ item.publish }}</span>
      </div>
      <div class="like">
        <div class="item">
          <svg-icon name="coplit" class="icon" />
          <span class="span">{{ item.collect }}</span>
        </div>
        <span class="item">|</span>
        <div class="item">
          <svg-icon name="like" class="icon" />
          <span class="span">{{ item.like }}</span>
        </div>
        <span class="item">|</span>
        <div class="item">
          <svg-icon name="comment" class="icon" />
          <span class="span">{{ item.comment }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, onMounted, reactive } from 'vue'
import { articleListApi } from "@/request/api"

interface artItf {
  collect: number
  comment: number
  content: string
  id: number
  item: []
  like: number
  publish: string
  title: string
  user: string
  webhttp: string
}
let articleArr: artItf[] = reactive([])

onMounted(() => {
  window.onscroll = pageScroll;
  articleListApi().then(res => {
    console.log(res);
    if (res.code === 200) {
      articleArr.push(...res.data)
      console.log(articleArr);

    }
  })
})
const pageScroll = () => {
  // 获取滚动的距离
  let scrollTop = document.documentElement.scrollTop;
  // 获取滚动的高度（获取整个html的高度）
  let scrollHeight = document.documentElement.scrollHeight;
  // 获取屏幕(浏览器)高度
  let clienHeight = document.documentElement.clientHeight;
  // 滚动的距离 + 屏幕高度 - 内容高度 >= 0 表示滚动到底部了      (下拉加载判断条件)
  if (scrollTop + clienHeight - scrollHeight >= 0) {
    console.log("我到底了");
  }
}

</script>
<style lang='less' scoped >
.article {
  width: 95%;
  height: auto;
  margin: 0 auto;
  padding-bottom: 30px;

  &-item {
    width: 100%;
    border-bottom: 1px solid #efefef;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0 20px 2px;
    margin-bottom: 30px;

    h1 {
      font-weight: bold;
    }

    .biaoqian {
      display: flex;
      margin-top: 10px;

      span {
        margin-right: 10px;
        padding: 2px 10px;
        border-radius: 2px;
        border: 1px solid #efefef;
        background-color: #fafafa;
        font-size: 12px;
      }
    }

    .content {
      font-size: 14px;
      margin: 10px 0;
    }

    .publishInfo {
      margin-top: 10px;
      display: flex;
      font-size: 12px;

      .icon {
        font-size: 16px;
      }

      .user,
      a {
        margin-left: 5px;
        font-size: 14px;
        color: #409eff;
        cursor: pointer;
        font-weight: bold;
        text-decoration: none;
      }

      .time,
      .write {
        color: #777777;
        margin: 0 5px;
      }

    }

    .like {
      display: flex;
      margin-top: 20px;
      color: #777777;
      font-size: 14px;

      .item {
        margin-right: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;

        .icon {
          font-size: 18px;
        }

        .span {
          margin-left: 2px;
        }
      }

      .line {
        color: #efefef;
      }
    }
  }
}
</style>
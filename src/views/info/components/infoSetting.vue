<template>
  <div class="wrapper">
    <div class="left">
      <el-form ref="ruleFormRef" :model="ruleForm" class="demo-ruleForm">
        <el-form-item label="邮箱" prop="name">
          <el-input v-model="input" placeholder="Please input" clearable />
        </el-form-item>
        <el-form-item label="昵称" prop="name">
          <el-input v-model="inputName" placeholder="Please input" clearable />
        </el-form-item>
        <el-form-item label="国家/地区" prop="region">
          <el-select placeholder="中国">
            <el-option label="中国" value="China" />
          </el-select>
        </el-form-item>
        <el-form-item label="所在省份" prop="count">
          <el-select-v2 placeholder="河南省" :options="options" v-model='provincce' />
        </el-form-item>
        <el-form-item label="个人简介" prop="desc">
          <el-input v-model="textarea" :rows="4" type="textarea" placeholder="个人简介" />
        </el-form-item>
        <el-form-item label="联系电话" prop="name">
          <el-input v-model="inputPhone" placeholder="Please input" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <div class="tor">
        <span>头像</span>
      </div>
      <div class="img">
        <img src="@/assets/img/our.jpg" alt="">
        <el-button type="primary">
          <el-icon class="el-icon--right">
            <Upload />
          </el-icon>
          <span>更换头像</span>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { cityListApi } from '@/request/api'
const input = ref('1849201815@qq.com')
const inputName = ref('Colin Cao')
const inputPhone = ref('666532')
const provincce = ref('河南省')
const textarea = ref('')
const ruleForm = reactive({

})

const submitForm = () => {

}
let options = reactive([{}])
onMounted(() => {
  cityListApi().then(res => {
    if (res.code === 200) {
      console.log(res);
    }
  })
})
console.log(options);




</script>
<style lang='less' scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  .left {
    width: 18.75rem;
    background-color: #fff;

    .demo-ruleForm {
      width: 100%;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .right {
    flex: 1;
    padding-top: 40px;
    background-color: #fff;
    padding-left: 10.125rem;

    .img {
      width: 10.75rem;
      height: 10.75rem;
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      :deep(.el-button) {
        width: 6.5rem;
        margin-top: 30px;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
<template #default="{route,Component}">
  <div :class="isshow !== 1 ? 'active' : 'wrapper' && `animate__animated ${$route.meta.transition}`" class="wrapper">
    <div class="fake">
      <div class="box1 animate__animated animate__fadeInLeftBig">
        <svg-icon name="fashion" class="svg"></svg-icon>
      </div>
    </div>
    <div class="login">
      <div class="login-box animate__animated animate__zoomIn">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
          <el-form-item label="">
            <h1 style="font-size: 24px;font-weight: bold;">欢迎回来</h1>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button class="btn" @click="submitForm()">Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
      <svg-icon name="login2" class="svg2"></svg-icon>
    </div>
    <div id="cssLoader17" class="main-wrap main-wrap--white " v-show="isshow !== 1"
      :class="`animate__animated ${$route.meta.transition}`">
      <div class="cssLoader17"></div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import { adminLoginApi, adminInfoApi } from '@/request/api'
import './login.css'
import 'animate.css';
import { useRouter } from 'vue-router'
import { useInfoStore } from '@/stores/counter'

let router = useRouter()
const infoStore = useInfoStore()
type Loginitf = {
  username: string
  pwd: string
}

const state = reactive({
  ruleForm: {
    username: "admin",
    pwd: '123456'
  }
})
let { ruleForm } = toRefs(state)
let ruleFormRef = ref()
const isshow = ref(1)
const validatePwd = (rule: unknown, value: string | undefined, cb: (msg?: string) => void) => {
  if (!value) {
    cb('密码不能为空')
  } else {
    cb()
  }
}

const rules = reactive({
  username: [
    { required: true, message: "用户名不能为空", trigger: 'blur' }
  ],
  pwd: [
    { validator: validatePwd, trigger: 'blur' }
  ]
})

const submitForm = () => {

  ruleFormRef.value.validate().then(() => {
    adminLoginApi(ruleForm.value).then(res => {
      if (res.code === 200) {
        isshow.value = 2
        infoStore.getAdminInfo().then(() => { })
        setTimeout(() => {
          router.push('/business/businessAnalysis')
        }, 800)
      }
    })
  }).catch(() => { })
}
</script>
<style lang='less' scoped>
/deep/ .el-form-item {
  margin: 1.875rem 0;
}

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;

  .fake {
    width: 50%;
    background-color: #2c41b4;
    border: 0 0 0 50%;

    .box1 {
      width: auto;
      height: 100%;

      .svg {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        font-size: 600px;
      }
    }
  }

  .login {
    width: 50%;
    background-color: #dcdfe2;

    .login-box {
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 4px 4px 20px 2px #fff;
      // background-color: #5169d5;
      padding: 1.25rem 5.125rem 1.25rem 1.25rem;
      margin-left: 30px;
      width: 50%;
      min-width: 400px;
      margin-top: 20%;
    }
  }
}

.svg2 {
  font-size: 400px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.svg2 {
  animation: myfirst 3s infinite;
}

@keyframes myfirst {
  0% {
    transform: translate(0px, 0px);
  }

  50% {
    transform: translate(0px, -30px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.active {
  width: 100%;
  height: 100vh;
}

.btn {
  cursor: pointer;
  border: none;
  background-color: #0960bd;
  color: #fff;
  width: 100%;
  height: 2rem;
  border-radius: 6px;
}
</style>
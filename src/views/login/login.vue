<template #default="{route,Component}">
  <div :class="isshow !== 1 ? 'active' : 'wrapper' && `animate__animated ${$route.meta.transition}`">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">Submit</el-button>
      </el-form-item>
    </el-form>

    <div id="cssLoader17" class="main-wrap main-wrap--white " v-show="isshow !== 1"
      :class="`animate__animated ${$route.meta.transition}`">
      <div class="cssLoader17"></div>
    </div>

  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import { adminLoginApi } from '@/request/api'
import './login.css'
import 'animate.css';
type Loginitf = {
  username: string
  pwd: string
}
const state = reactive({
  ruleForm: {
    username: "",
    pwd: ''
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
  // isshow.value = 2
  ruleFormRef.value.validate().then(() => {

  }).catch(() => {

  })
}
</script>
<style lang='less' scoped>

</style>
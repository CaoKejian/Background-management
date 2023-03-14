<template>
  <div class="table" v-show="PropData.visible">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="商品分类" prop="classValue">
        <el-select v-model="ruleForm.classValue" class="m-2" placeholder="Select">
          <el-option v-for="item in classArr" :key="item.name" :label="item.name" :value="item.name" />
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品品牌" prop="pwd">
        <el-input v-model="ruleForm.pwd" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品介绍">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="商品售价" prop="sale">
        <el-input v-model="ruleForm.sale" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="市场价" prop="outsale">
        <el-input v-model="ruleForm.outsale" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品库存" prop="storage">
        <el-input v-model="ruleForm.storage" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
let ruleFormRef = ref()
type Props = {
  visible: boolean
}
const PropData = defineProps<Props>()
const state = reactive<{
  ruleForm: {
    username: string,
    pwd: string
    classValue: string
    desc: string
    sale: number
    outsale: number
    storage: number
  }
  classArr: { name: string }[]
  active: number
}>({
  ruleForm: {
    username: "空调",
    pwd: "格力",
    classValue: "",
    desc: "测试介绍",
    sale: 0,
    outsale: 0,
    storage: 999
  },
  classArr: [
    { name: '电器' },
    { name: '工具' },
    { name: '家具' },
    { name: '玩具' },
  ],
  active: 0
})
const { ruleForm, classArr, active } = toRefs(state)
// 校验规则
const validatePwd = (rule: unknown, value: string | undefined, cb: (msg?: string) => void) => {
  if (!value) {
    cb('密码不能为空')
  } else {
    cb()
  }
}
const validateClass = (rele: unknown, value: string | undefined, cb: (msg?: string) => void) => {
  if (!value) {
    cb('分类不能为空')
  } else {
    cb()
  }
}
const validateData = (rele: unknown, value: number | undefined, cb: (msg?: string) => void) => {
  if (value == null) {
    cb('价格不能为空')
  } else {
    if (value < 0) {
      cb('价格不能小于0')
    } else if (value >= 99999) {
      cb('价格设置超过上限')
    }
    cb()
  }
}
const validateStorage = (rele: unknown, value: number | undefined, cb: (msg?: string) => void) => {
  if (value == null) {
    cb('库存不能为空')
  } else {
    if (value < 0) {
      cb('库存不能小于0')
    } else if (value >= 99999) {
      cb('库存设置超过上限')
    }
    cb()
  }
}
const rules = reactive({
  classValue: [
    { validator: validateClass, trigger: 'blur' }
  ],
  username: [
    { required: true, message: "商品名不能为空", trigger: 'blur' }
  ],
  pwd: [
    { validator: validatePwd, trigger: 'blur' }
  ],
  desc: [
    { required: true, message: "商品介绍不能为空", trigger: 'blur' }
  ],
  sale: [
    { validator: validateData, trigger: "blur" }
  ],
  outsale: [
    { validator: validateData, trigger: "blur" }
  ],
  storage: [
    { validator: validateStorage, trigger: "blur" }
  ]
})
const emits = defineEmits<{
  (event: "add", value: number): void
}>()
const submitForm = () => {
  ruleFormRef.value.validate().then(() => {
    emits('add', active.value)
  })
}
</script>
<style lang='less' scoped></style>
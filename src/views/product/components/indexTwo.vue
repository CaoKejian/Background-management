<template>
  <div class="table" v-show="PropData.visible2">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="赠送积分" prop="integral">
        <el-input v-model="ruleForm.integral" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="预告商品" prop="username">
        <el-switch v-model="ruleForm.value1" />
      </el-form-item>
      <el-form-item label="商品上架" prop="username">
        <el-switch v-model="ruleForm.value2" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
type Props = {
  visible2: boolean
}
const PropData = defineProps<Props>()
const ruleFormRef = ref()
const state = reactive<{
  ruleForm: {
    integral: number
    value1: boolean
    value2: boolean
  }
}>({
  ruleForm: {
    integral: 0,
    value1: false,
    value2: false
  }
})
const { ruleForm } = toRefs(state)
const valiDataInte = (rele: unknown, value: number | undefined, cb: (msg?: string) => void) => {
  if (value == null) {
    cb('积分不能为空')
  } else {
    if (value < 0) {
      cb('积分不能小于0')
    }
    cb()

  }
}
const rules = reactive({
  integral: [
    { validator: valiDataInte, tregger: 'blur' }
  ]
})
const emits = defineEmits<{
  (event:"add",value:number):void
}>()
const submitForm = () => {
  ruleFormRef.value.validate().then(() => {
    emits('add',1)
  })

}
</script>
<style lang='less' scoped></style>
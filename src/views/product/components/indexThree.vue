<template>
  <div class="table" v-show="PropData.visible3">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="文本编辑:" prop="use">
        <vue3-tinymce class="vue3" v-model="state.content" :setting="state.setting" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
import Vue3Tinymce from '@jsdawn/vue3-tinymce';
type Props = {
  visible3: boolean
}
const PropData = defineProps<Props>()
const abc = reactive({

});
const ruleFormRef = ref()
const state = reactive<{
  content: string
  setting: {}
  ruleForm: {
    imgPath: string
  }
}>({
  content: '请在此区域编辑详情',
  // editor 配置项
  setting: {
    height: 400, // editor 高度
  },
  ruleForm: {
    imgPath: ""
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
  (event: "add", value: number): void
}>()
const submitForm = () => {
  ruleFormRef.value.validate().then(() => {
    console.log(state.content);

    emits('add', 2)
  })

}
</script>
<style lang='less' scoped>
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 148px;
  height: 148px;
  text-align: center;
  border: 1px dashed #c1c0c0;
  transition: all .4s;

  &:hover {
    border: 1px dashed #409eff;
  }
}
</style>
<template>
  <el-dialog v-model="PropData.visible" title="编辑资源信息" :before-close="close">
    <el-form :model="form">
      <el-form-item label="资源名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="资源路径" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off" />
      </el-form-item>
      <el-form-item label="资源描述" :label-width="formLabelWidth">
        <el-input v-model="form.content" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时间" :label-width="formLabelWidth">
        <el-input v-model="form.addData" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="confirm">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
type Props = {
  visible: boolean,
  form: peopleObjItf
}
const state = reactive<{
  formLabelWidth: string
}>({
  formLabelWidth: '120px',
})
const { formLabelWidth } = toRefs(state)
const PropData = defineProps<Props>()
const emits = defineEmits<{
  (event: "close"): void
}>()
const close = () => {
  emits('close')
}
const confirm = () => {
  emits('close')
}
</script>
<style lang='less' scoped></style>
<template>
  <el-dialog v-model="PropData.visible" title="编辑资源信息" :before-close="close">
    <el-form :model="newform">
      <el-form-item label="资源名称" :label-width="formLabelWidth">
        <el-input v-model="newform.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="资源路径" :label-width="formLabelWidth">
        <el-input v-model="newform.address" autocomplete="off" />
      </el-form-item>
      <el-form-item label="资源描述" :label-width="formLabelWidth">
        <el-input v-model="newform.content" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时间" :label-width="formLabelWidth">
        <el-input v-model="newform.addData" autocomplete="off" />
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
type Proptype = {
  visible: boolean
}
const PropData = defineProps<Proptype>()
const state = reactive<{
  formLabelWidth:string
  newform:any
}>({
  formLabelWidth: '120px',
  newform: []
})
const { formLabelWidth, newform } = toRefs(state)
const close = () => {

}
const confirm = () => {

}
</script>
<style lang='less' scoped></style>
<template>
  <el-dialog v-model="propData.visible" title="Shipping address" :before-close="close1">
    <el-form :model="newForm" :label-width="formLabelWidth">
      <el-form-item label="账号：">
        <el-input v-model="newForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="newForm.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input v-model="newForm.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="newForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注：">
        <el-input v-model="newForm.note" type="textarea" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否启用：">
        <el-radio v-model="newForm.status" :label="1" size="large">是</el-radio>
        <el-radio v-model="newForm.status" :label="0" size="large">否</el-radio>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close()">取消</el-button>
        <el-button type="primary" @click="modify">
          完成
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, watch } from 'vue'
import { updateAdmin } from '../../../request/api'
interface AdminObjItf {
  id?: number
  username?: string
  nickName?: string
  email?: string
  password?: string
  note?: string
  status?: number
}
type Props = {
  visible: boolean,
  form: AdminObjItf
}

const propData = defineProps<Props>()
const state = reactive<{
  formLabelWidth: string
  newForm: AdminObjItf
}>({
  formLabelWidth: '120px',
  newForm: {}
})
const { formLabelWidth, newForm } = toRefs(state)
// 拷贝from
watch(() => propData.form, () => {
  newForm.value = { ...propData.form }
})
const emit = defineEmits<{
  (event: "close", r?: "reload"): void
}>()
const close1 = () => {
  emit("close")
}
const close = (r?: 'reload') => {
  emit("close", r)
}
// 完成
const modify = () => {
  if (newForm.value.id) {
    updateAdmin(
      newForm.value.id,
      newForm.value
    ).then(res => {
      close('reload')
    })
  }
}
</script>
<style lang='less' scoped></style>
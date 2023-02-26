<template>
  <el-dialog v-model="PropData.visible" title="分配角色" :before-close="close">
    <el-form :model="PropData.form">
      <el-form-item>
        <el-select multiple v-model="form.userRoles" placeholder="Please select a zone">
          <el-option v-for="role in form.roleLists" :label="role.name" :value="role.id" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="modify">
          完成
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue'
onMounted(() => {
})
type roleRes = {
  visible: boolean
  form: AdminRoleFormData
}
const PropData = defineProps<roleRes>()
const roles = ref<number[]>([])
watch(() => PropData.form.userRoles, () => {
  roles.value = PropData.form.userRoles.map(item => item.id)
})
const emit = defineEmits<{
  (event: 'close'): void
}>()
const close = () => {
  emit('close')
}
const modify = () => {
  close()
}
</script>
<style lang='less' scoped></style>
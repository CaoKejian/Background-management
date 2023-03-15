<template>
  <el-dialog v-model="useProduct.visible" title="编辑资源信息" :before-close="close">
    <el-form :model="newform">
      <el-form-item label="商品品牌" :label-width="formLabelWidth">
        <el-input v-model="newform.firstname" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品名称" :label-width="formLabelWidth">
        <el-input v-model="newform.lastname" autocomplete="off" />
      </el-form-item>
      <el-form-item label="获得积分" :label-width="formLabelWidth">
        <el-input v-model="newform.integral" autocomplete="off" />
      </el-form-item>
      <el-form-item label="库存" :label-width="formLabelWidth">
        <el-input v-model="newform.storage" autocomplete="off" />
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
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useProductStore } from "@/stores/product"
import { ElMessage } from 'element-plus'

const useProduct = useProductStore()
type Proptype = {
  visible: boolean
}
const PropData = defineProps<Proptype>()
const state = reactive<{
  formLabelWidth: string
  newform: any
}>({
  formLabelWidth: '120px',
  newform: []
})
const { formLabelWidth, newform } = toRefs(state)
const close = () => {
  useProduct.visible = false
  ElMessage({
    message: '已关闭',
    type: 'warning',
  })
}
const confirm = () => {
  useProduct.visible = false
  ElMessage({
    message: '编辑成功',
    type: 'success',
  })
}
onMounted(() => {
  newform.value = useProduct.row
})

</script>
<style lang='less' scoped></style>
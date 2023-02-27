<template>
  <div class="top">
    <AlluseDiv :name="name" />
    <div class="container">
      <div class="box1">
        <span>输入账号</span>
        <el-input v-model="username" class="w-50 m-2" placeholder="账号名称/关键字" :prefix-icon="Search" />
      </div>
      <div>
        <el-icon class="is-loading" v-show="showIcon">
          <Loading />
        </el-icon>
        <el-button @click="submit" type="primary">查询</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, watch } from 'vue'
import AlluseDiv from '@/views/business/components/AlluseDiv.vue';
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { SearchAdminRole } from '@/request/api'

const username = ref('')
const showIcon = ref<boolean>(false)
const state = reactive<{
  name: string
  searchData: {}[]
}>({
  name: '筛选搜索',
  searchData: []
})
const { name, searchData } = toRefs(state)
const emits = defineEmits<{
  (event: "search", value: {}): void
  (event: 'refalsh'): void
}>()
watch(username, (newVal, oldValue) => {
  console.log(newVal, oldValue);
  if (newVal == '') {
    emits('refalsh')
  }
})
const submit = () => {
  if (username.value == '') {
    ElMessage({
      message: '搜索值不能为空',
      type: 'error',
    })
    return
  }
  showIcon.value = true
  SearchAdminRole(username.value).then(res => {
    setTimeout(() => {
      searchData.value = res.data[0]
      const result = JSON.parse(JSON.stringify(searchData.value))
      emits('search', result)
      showIcon.value = false
      ElMessage({
        message: '查询成功',
        type: 'success',
      })
    }, 800);
  })

}
</script>
<style lang='less' scoped>
.container {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;

  .box1 {
    display: flex;
    justify-content: space-between;
  }
}
</style>
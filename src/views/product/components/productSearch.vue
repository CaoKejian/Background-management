<template>
  <div class="top">
    <AlluseDiv :name="name" />
    <div class="container">
      <div class="box1">
        <span>输入名称</span>
        <el-input v-model="lastname" class="w-50 m-2" placeholder="商品名称/关键字" :prefix-icon="Search" />
      </div>
      <div class="box2">
        <el-icon class="is-loading" v-show="showIcon">
          <Loading />
        </el-icon>
        <el-button @click="submit" type="primary">查询</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, watch, onMounted, onUnmounted } from 'vue'
import AlluseDiv from '@/views/business/components/AlluseDiv.vue';
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { SearchProduct } from '@/request/api'
import { useProductStore } from '@/stores/product'
const useProduct = useProductStore()
type keyDownRes = {
  keyCode: number
}
const firstname = ref('')
const lastname = ref('')
const showIcon = ref<boolean>(false)
const state = reactive<{
  name: string
  searchData: {}[]
}>({
  name: '筛选搜索',
  searchData: []
})
const { name, searchData } = toRefs(state)


watch(lastname, (newVal, oldValue) => {
  if (lastname.value == '') {
    useProduct.getProduct()
  }
})
const submit = () => {
  if (firstname.value == '' && lastname.value == '') {
    ElMessage({
      message: '搜索值不能为空',
      type: 'error',
    })
    return
  }
  SearchProduct(lastname.value).then(res => {
    setTimeout(() => {
      searchData.value = res.data
      const result = JSON.parse(JSON.stringify(searchData.value))
      useProduct.allList = result
      showIcon.value = false
    }, 200);
    ElMessage({
      message: '查询成功',
      type: 'success',
    })
    showIcon.value = true

  })
}
onMounted(() => {
  window.addEventListener('keydown', keyDown)
})
onUnmounted(() => {
  window.removeEventListener('keydown', keyDown, false)
})

const keyDown = (e: keyDownRes) => {
  if (e.keyCode == 13) {
    submit()
  }
}
</script>
<style lang='less' scoped>
.top {
  margin-bottom: 20px;
}

.container {
  width: 100%;
  min-width: 500px;
  background-color: #fff;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;

  .box1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      width: 110px;
      min-width: 80px;
      margin-left: 20px;
    }
  }

  .box2 {
    margin-right: 20px;
  }
}
</style>
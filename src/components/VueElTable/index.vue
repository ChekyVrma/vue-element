<!-- 数据栏 -->
<template>
  <div class='app-container'>
    <!--筛选栏-->
    <div class='filter-container'>

    </div>
    <!--工具栏-->
    <div class='operate-container'>

    </div>
    <!-- 数据栏 -->
    <div class='data-container'>

    </div>
    <!-- 分页栏 -->
    <vue-el-pagination :options='options'
                       @sizeChangeWatch='sizeChangeReceive'
                       @currentChangeWatch='currentChangeReceive'></vue-el-pagination>
  </div>
</template>
<script>
import VueElPagination from './lib/VueElPagination'
export default {
  name: 'VueElTable',
  components: {
    VueElPagination
  },
  data() {
    return {
      options: {
        type: Object,
        default: {
          // 添加按钮
          add: {
            label: '添加',
            show: true,
            disabled: false,
            handle: () => {}
          },
          // 批量删除按钮
          delete: {
            label: '批量删除',
            show: true,
            disabled: false,
            handle: () => {}
          }
        }
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    // 每页条数改变时回调函数
    sizeChangeReceive(val) {},

    // 每页条数改变时回调函数
    currentChangeReceive(val) {}
  }
}
</script>

<style>
</style>


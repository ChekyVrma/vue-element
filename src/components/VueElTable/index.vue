<!-- 数据栏 -->
<template>
  <div class='app-container'>
    <!--筛选栏-->
    <div class='filter-container'>

    </div>
    <!--工具栏-->
    <vue-el-toolbar :options='toolbarOptions'></vue-el-toolbar>
    <!-- 数据栏 -->
    <div class='data-container'>

    </div>
    <!-- 分页栏 -->
    <vue-el-pagination :options='paginationOptions'
                       @sizeChangeWatch='sizeChangeReceive'
                       @currentChangeWatch='currentChangeReceive'></vue-el-pagination>
  </div>
</template>
<script>
import VueElPagination from './lib/VueElPagination'
import VueElToolbar from './lib/VueElToolbar'
export default {
  name: 'VueElTable',
  components: {
    VueElPagination,
    VueElToolbar
  },
  data () {
    return {
      paginationOptions: {
        page: 1, // 当前页
        size: 10, // 每页条数
        total: 1 // 总页数
      },

      toolbarOptions: [
        {
          // 添加按钮
          label: '添加',
          show: true,
          disabled: false,
          type: 'primary',
          icon: 'el-icon-circle-plus-outline',
          handle: () => { }
        },
        {
          // 批量删除按钮
          label: '批量删除',
          show: true,
          disabled: false,
          type: 'danger',
          icon: 'el-icon-remove-outline',
          handle: () => { }
        }
      ],

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
    sizeChangeReceive (val) { },

    // 每页条数改变时回调函数
    currentChangeReceive (val) { }
  }
}
</script>

<style>
.app-container {
  height: 100%;
}
</style>

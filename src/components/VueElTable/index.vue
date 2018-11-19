<!-- 数据栏 -->
<template>
  <div class='app-container'>
    <!--搜索栏-->
    <base-search></base-search>
    <!--工具栏-->
    <base-toolbar ref="toolbar"
                  :options='toolbarOptions'></base-toolbar>
    <!-- 数据栏 -->
    <base-table @selectionChangeWatch="selectionChangeReceive" :api="water.getWaterList"></base-table>
    <!-- 分页栏 -->
    <div class='pagination-container'>
      <base-pagination :options='paginationOptions'
                       @sizeChangeWatch='sizeChangeReceive'
                       @currentChangeWatch='currentChangeReceive'></base-pagination>
    </div>
  </div>
</template>
<script>
import BasePagination from './lib/BasePagination'
import BaseToolbar from './lib/BaseToolbar'
import BaseTable from './lib/BaseTable'
import BaseSearch from './lib/BaseSearch'
import water from './commons/api/water'
export default {
  name: 'VueElTable',
  components: {
    BasePagination,
    BaseToolbar,
    BaseTable,
    BaseSearch
  },
  data () {
    return {
      paginationOptions: {
        page: 1, // 当前页
        size: 10, // 每页条数
        total: 1 // 总页数
      },

      toolbarOptions: {
        add: {
          // 添加按钮
          label: '添asd加',
          show: true,
          disabled: false,
          type: 'primary',
          icon: 'el-icon-circle-plus-outline',
          handle: () => { this.handleAdd() }
        }
      }
    }
  },
  methods: {
    // 当每页条数改变时会触发该事件
    sizeChangeReceive (val) { },

    // 当每页条数改变时会触发该事件
    currentChangeReceive (val) { },

    // 当选择项发生变化时会触发该事件
    selectionChangeReceive (selection) { },

    handleAdd () {
      debugger
      alert('Asdasd')
      this.$refs.toolbar.options = []
    }
  }
}
</script>

<style lang="stylus" scoped>
.app-container {
  .pagination-container {
    text-align: center;
  }
}
</style>

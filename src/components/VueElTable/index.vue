<!-- 数据栏 -->
<template>
  <div class='app-container'>
    <!--搜索栏-->
    <base-search ref="search"
                 :configs='configs.search'
                 :searchData='values.searchData'></base-search>
    <!--工具栏-->
    <base-toolbar ref="toolbar"
                  :configs='configs.toolbar'></base-toolbar>
    <!-- 数据栏 -->
    <base-table ref="table"
                :configs='configs.table'
                :tableData='values.tableData'></base-table>
    <!-- 分页栏 -->
    <div class='pagination-container'>
      <base-pagination ref="pagination"
                       :configs='configs.pagination'></base-pagination>
    </div>
  </div>
</template>
<script>
import BasePagination from './lib/BasePagination'
import BaseToolbar from './lib/BaseToolbar'
import BaseTable from './lib/BaseTable'
import BaseSearch from './lib/BaseSearch'
export default {
  name: 'VueElTable',
  components: {
    BasePagination,
    BaseToolbar,
    BaseTable,
    BaseSearch
  },
  mounted () {
    this.$nextTick(function () {
      this.$refSearch = this.$refs.search
      this.$refToolbar = this.$refs.toolbar
      this.$refTable = this.$refs.table
      this.$refPagination = this.$refs.pagination
    })
  },
  props: {
    // 配置类参数
    configs: {
      type: Object,
      default () {
        return {
          // 搜索栏
          search: {
          },
          // 工具栏
          toolbar: {
          },

          // 表格
          table: {
          },
          // 分页栏
          pagination: {
          }
        }
      }
    },
    values: {
      type: Object,
      default () {
        return {
          // 表格数据
          tableData: [
          ],
          // 搜索条件数据
          searchData: {
          }
        }
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
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

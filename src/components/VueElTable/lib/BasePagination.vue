<!-- 分页栏 -->
<template>
  <el-pagination v-show='configs.total>0'
                 :current-page='configs.page'
                 :page-size='configs.size'
                 :total='configs.total'
                 :page-sizes='[10,20,30,50]'
                 background
                 layout='total, sizes, prev, pager, next, jumper'
                 @size-change='configs.handleSizeChange'
                 @current-change='configs.handleCurrentChange' />
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    configs: {
      type: Object,
      default () {
        return {
          page: 1, // 当前页
          size: 10, // 每页条数
          total: 1 // 总页数
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style>
</style>

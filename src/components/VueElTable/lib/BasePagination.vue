<!-- 分页栏 -->
<template>
  <el-pagination v-show='options.total>0'
                 :current-page='options.page'
                 :page-size='options.size'
                 :total='options.total'
                 :page-sizes='[10,20,30,50]'
                 background
                 layout='total, sizes, prev, pager, next, jumper'
                 @size-change='handlesizeChange'
                 @current-change='handleCurrentChange' />
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    options: {
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
    // 每页条数改变时操作
    handlesizeChange (val) {
      this.$emit('sizeChangeWatch', val)
    },
    // 当前页改变时操作
    handleCurrentChange () {
      this.$emit('currentChangeWatch', val)
    }
  }
}
</script>

<style>
</style>

<!-- 工具栏 -->
<template>
  <el-row>
    <el-button type='primary'
               icon='el-icon-circle-plus-outline'
               @click='options.add.handle'
               :disabled='disabled'>{{options.add.label}}</el-button>

    <el-button type='danger'
               icon='el-icon-remove-outline'
               @click='options.delete.handle'
               :disabled='disabled'>{{options.delete.label}}</el-button>
  </el-row>
</template>

<script>
export default {
  name: 'VueElToolBar',
  props: {
    options: {
      type: Object,
      default: {
        // 添加按钮
        add: {
          label: '添加',
          show: true,
          disabled: false,
          // handle: () => {}
        },
        // 批量删除按钮
        delete: {
          label: '批量删除',
          show: true,
          disabled: false,
          // handle: () => {}
        }
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>


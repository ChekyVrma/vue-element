<!-- 工具栏 -->
<template>
  <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleCreate">{{addConfig.label}}</el-button>
  <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleCreate">{{delete.label}}</el-button>
</template>

<script>
export default {
  name: "VueElToolBar",
  props: {
    params: {
      type: Object,
      default: {
        // 添加按钮
        add: {
          type: Object,
          default: {
            label: "添加",
            show: true,
            handle: () => {}
          }
        },
        // 批量删除按钮
        delete: {
          type: Object,
          default: {
            label: "批量删除",
            show: true,
            handle: () => {}
          }
        }
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>


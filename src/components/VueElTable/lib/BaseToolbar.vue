<!-- 工具栏 -->
<template>
  <el-row>
    <el-button v-for='(item) in distOptions'
               :key='item.id'
               :type='item.type'
               :icon='item.icon'
               @click='item.handle'
               :disabled='item.disabled'>{{item.label}}
    </el-button>
  </el-row>
</template>

<script>
export default {
  name: 'BaseToolbar',
  props: {
    options: {
      type: Array,
      default () {
        return [
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
        ]
      }
    }
  },

  mounted () {
    debugger
    this.distOptions = Object.assign(this.distOptions, this.options)
  },

  // watch: {
  //   options: function (newVal, oldVal) {
  //     debugger
  //     this.distOptions = Object.assign(this.distOptions, newVal) // 初始化表单
  //   }
  // },

  data () {
    return {
      distOptions: [
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
      ]
    }
  }
}
</script>

<style></style>

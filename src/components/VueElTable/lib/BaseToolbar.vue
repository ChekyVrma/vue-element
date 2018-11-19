<!-- 工具栏 -->
<template>
  <el-row>
    <el-button v-for='(val, key) in distOptions'
               :key='key'
               :type='val.type'
               :icon='val.icon'
               :disabled='val.disabled'
               @click='val.handle'>{{!val.both?val.label:(!val.toggle?val.labelEdit:val.labelSave)}}
    </el-button>
  </el-row>
</template>

<script>
export default {
  name: 'BaseToolbar',
  props: {
    configs: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  mounted () {
    this.distOptions = Object.assign(this.distOptions, this.configs.options)
    // this.editFlag = this.$parent.$refTable.configs.editFlag
  },

  watch: {
    $parent () {
      // this.$parent.$refTable.configs.editFlag
    }
  },

  data () {
    return {
      // editFlag: fasle,
      distOptions: {
        add: {
          // 添加按钮
          label: '添加',
          disabled: false,
          type: 'primary',
          icon: 'el-icon-circle-plus-outline',
          handle: () => { }
        },
        delete: {
          // 批量删除按钮
          label: '批量删除',
          disabled: false,
          type: 'danger',
          icon: 'el-icon-remove-outline',
          handle: () => { }
        }
      }
    }
  }
}
</script>

<style></style>

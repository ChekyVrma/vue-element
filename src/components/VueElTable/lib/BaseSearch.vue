<!-- 搜索栏 -->
<template>
  <el-form :inline='true'
           :model="searchData"
           @submit.native.prevent='configs.search.handle'>
    <el-form-item v-for='(form, index) in configs.forms'
                  :key='index'
                  :label='form.label'>
      <el-input v-if="form.type === 'input' || form.type === undefined"
                v-model="searchData[form.prop]"
                clearable
                @keyup.enter.native="handleSearch" />
      <el-select v-else-if="form.type === 'select'"
                 v-model="searchData[form.prop]"
                 :placeholder="form.placeholder">
        <el-option v-for="(option, optionIndex) in form.options"
                   :key="optionIndex"
                   :value="option[form.valueKey]"
                   :label="option[form.labelKey]" />
      </el-select>
      <el-date-picker v-else-if="form.type === 'date'"
                      v-model="searchData[form.prop]"
                      type="date"
                      clearable
                      :placeholder="form.placeholder"
                      :picker-options="form.pickerOptions || {}" />
    </el-form-item>
    <el-button :type="configs.reset.type"
               :icon="configs.reset.icon"
               @click="configs.reset.handle">{{configs.reset.label}}</el-button>
    <el-button :type="configs.search.type"
               :icon="configs.search.icon"
               @click="configs.search.handle">{{configs.search.label}}</el-button>
  </el-form>

</template>

<script>
export default {
  name: 'BaseSearch',
  props: {
    configs: {
      type: Object,
      default () {
        return {
          search: {
            type: 'primary',
            icon: 'el-icon-search',
            label: '搜索',
            handle: () => { }
          },
          reset: {
            type: 'primary',
            icon: 'el-icon-refresh',
            label: '重置',
            handle: () => { }
          },
          forms: [
          ]
        }
      }
    },
    searchData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    handleSearch () { },
    handleReset () { },
    handlePickerOptions () { }
  }
}
</script>

<style>
</style>

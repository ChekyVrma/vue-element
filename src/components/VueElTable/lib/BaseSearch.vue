<!-- 搜索栏 -->
<template>
  <el-form :inline='true'
           :model="options.formData"
           @submit.native.prevent='handleSearch'>
    <el-form-item v-for='(form, index) in options.forms'
                  :key='index'
                  :label='form.label'>
      <el-input v-if="form.type === 'input' || form.type === undefined"
                v-model="options.formData[form.prop]"
                clearable
                @keyup.enter.native="handleSearch" />
      <el-select v-else-if="form.type === 'select'"
                 v-model="options.formData[form.prop]"
                 :placeholder="form.placeholder">
        <el-option v-for="(option, optionIndex) in form.options"
                   :key="optionIndex"
                   :value="option[form.valueKey]"
                   :label="option[form.labelKey]" />
      </el-select>
      <el-date-picker v-else-if="form.type === 'date'"
                      v-model="options.formData[form.prop]"
                      type="date"
                      clearable
                      :placeholder="form.placeholder"
                      :picker-options="form.pickerOptions || {}" />
    </el-form-item>
    <el-button :type="options.reset.type"
               :icon="options.reset.icon"
               @click="handleReset">{{options.reset.label}}</el-button>
    <el-button :type="options.search.type"
               :icon="options.search.icon"
               @click="handleSearch">{{options.search.label}}</el-button>
  </el-form>

</template>

<script>
export default {
  name: 'BaseSearch',
  props: {
    options: {
      type: Object,
      default () {
        return {
          search: {
            type: 'primary',
            icon: 'el-icon-search',
            label: '搜索'
          },
          reset: {
            type: 'primary',
            icon: 'el-icon-refresh',
            label: '重置'
          },
          forms: [
            {
              label: '名称',
              type: 'input',
              prop: 'name',
              placeholder: '名称'
            },
            {
              label: '部门',
              type: 'select',
              prop: 'department',
              placeholder: '部门名称',
              valueKey: 'id',
              labelKey: 'name',
              options: [
                {
                  id: 1,
                  name: '部门1'
                }, {
                  id: 2,
                  name: '部门2'
                }, {
                  id: 2,
                  name: '部门2'
                }
              ]
            },
            {
              label: '日期',
              type: 'date',
              prop: 'startDate',
              placeholder: '选择日期',
              pickerOptions: () => { handlePickerOptions() }
            }
          ],

          formData: {
            name: 'asda',
            department: '',
            startDate: ''
          }
        }
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

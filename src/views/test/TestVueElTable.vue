<!-- 模板 -->
<template>
  <vue-el-table :configs='configs'
                :values='values'></vue-el-table>
</template>

<script>
import VueElTable from '@/components/VueElTable'
export default {
  name: 'TestVueElTable',
  components: {
    VueElTable
  },
  data () {
    return {
      configs: {
        // 搜索栏
        search: {
          // 搜索按钮
          search: {
            type: 'primary',
            icon: 'el-icon-search',
            label: '搜索',
            handle: () => {
              debugger
              this.handleSearch()
            }
          },
          // 重置按钮
          reset: {
            type: 'primary',
            icon: 'el-icon-refresh',
            label: '重置',
            handle: () => { }
          },
          // 表单项
          forms: [
            {
              label: '用户',
              type: 'input',
              prop: 'name',
              placeholder: ''
            },
            {
              label: '部门',
              type: 'select',
              prop: 'department',
              placeholder: '全部',
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
          ]
        },
        // 工具栏
        toolbar: {
          options: {
            // 添加按钮
            add: {
              label: '添加',
              disabled: false,
              type: 'primary',
              icon: 'el-icon-circle-plus-outline',
              handle: () => { }
            },
            // 删除按钮
            delete: {
              label: '批量删除',
              disabled: false,
              type: 'danger',
              icon: 'el-icon-remove-outline',
              handle: () => { }
            }
          }
        },
        // 表格
        table: {
          border: true,
          maxHeight: 350,
          size: 'medium',
          highlightCurrentRow: true,

          // 是否支持行内编辑
          inlineEditable: {},

          // 选择列
          selection: {
            width: 55,
            align: 'center',
            show: false,
            handle: () => { }
          },
          // 序号列
          index: {
            width: 60,
            align: 'center',
            show: true,
            label: '序号'
          },
          // 操作列
          handle: {
            width: 230,
            align: 'center',
            show: true,
            label: '操作'
          },
          // 编辑按钮
          edit: {
            label: '编辑',
            disabled: false,
            type: 'primary',
            icon: 'el-icon-circle-plus-outline',
            handle: (row) => {
              if (inlineEditable) {
                row.editFlag = true
              }
            }
          },
          // 删除按钮
          delete: {
            label: '删除',
            disabled: false,
            type: 'primary',
            icon: 'el-icon-circle-plus-outline',
            handle: () => { }
          },
          // 数据列
          columns: [
            { prop: 'date', label: '日期', width: 250, align: 'center' },
            { prop: 'name', label: '名称', width: 250, align: 'center' },
            { prop: 'address', label: '地址', width: 250, align: 'center' }
          ]
        },
        // 分页栏
        pagination: {
          page: 1, // 当前页
          size: 10, // 每页条数
          total: 1, // 总页数
          handleSizeChange: () => { },
          handleCurrentChange: () => { }
        }
      },
      values: {
        // 表格数据
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小龙',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小黑',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小豹',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],

        // 搜索条件数据
        searchData: {
          name: 'bongxin',
          department: '1',
          startDate: ''
        }
      }
    }
  },
  methods: {
    handleSearch () {
      debugger
    }
  }
}
</script>

<style scoped>
</style>

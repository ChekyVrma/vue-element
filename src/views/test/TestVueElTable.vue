<!-- 模板 -->
<template>
  <vue-el-table ref="vueElTable"
                :configs='configs'
                :values='values'></vue-el-table>
</template>

<script>
import VueElTable from '@/components/VueElTable'
export default {
  name: 'TestVueElTable',
  components: {
    VueElTable
  },
  mounted () {
    this.$nextTick(function () {
      this.refVueElTable = this.$refs.vueElTable
      this.refSearch = this.refVueElTable.$refSearch
      this.refToolbar = this.refVueElTable.$refToolbar
      this.refTable = this.refVueElTable.$refTable
      this.refPagination = this.refVueElTable.$refPagination
    })
  },
  data () {
    return {
      // 直接子组件对象
      refVueElTable: {},
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
            },
            // 编辑全部按钮
            editAll: {
              labelEdit: '编辑所有',
              labelSave: '保存所有',
              both: true,
              toggle: false,
              disabled: false,
              type: 'primary',
              handle: () => {
                this.handleEditAll()
              }
            }
          }
        },
        // 表格
        table: {
          border: true,
          maxHeight: 350,
          size: 'medium',
          highlightCurrentRow: true,

          // 行内编辑标识
          editFlag: false,

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
            size: 'small',
            // 编辑按钮
            header: {
              width: 230,
              align: 'center',
              show: true,
              label: '操作'
            },
            options: {
              edit: {
                labelEdit: '编辑',
                labelSave: '保存',
                both: true,
                disabled: false,
                type: 'primary',
                icon: 'el-icon-circle-plus-outline',
                handle: (row) => {
                  debugger
                  this.handleEdit(row)
                }
              },
              // 删除按钮
              delete: {
                label: '删除',
                disabled: false,
                type: 'danger',
                icon: 'el-icon-circle-plus-outline',
                handle: () => { }
              }
            }
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
    },

    // 编辑全部按钮
    handleEditAll () {
      debugger
      if (this.refTable.configs.editFlag) {
        this.refTable.configs.editFlag = false
        this.refToolbar.configs.options.editAll.toggle = false

        this.values.tableData.map(item => {
          item.editFlag = false
        })

      } else {
        this.refTable.configs.editFlag = true
        this.refToolbar.configs.options.editAll.toggle = true

        this.values.tableData.map(item => {
          item.editFlag = true
        })
      }
      console.log(this)

      this.flushList()
    },

    handleEdit (row) {
      debugger
      if (!row.editFlag) {
        row.editFlag = true
        // row.saveFlag = true
      } else {
        row.editFlag = false
        // row.saveFlag = false
      }
    }
  }
}
</script>

<style scoped>
</style>

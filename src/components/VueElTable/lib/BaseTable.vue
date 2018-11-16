<!-- 表格数据 -->
<template>
  <el-table :data='options.tableData'
            :border='options.border'
            :max-height='options.maxHeight'
            :size='options.size'
            :highlight-current-row='options.highlightCurrentRow'
            @selection-change="selection => emitEventHandler('selectionChangeWatch', selection)">
    <el-table-column type='selection'
                     v-show='options.index.show'
                     :width='options.selection.width'
                     :align='options.selection.align'>
    </el-table-column>
    <el-table-column type='index'
                     v-show='options.index.show'
                     :label='options.index.label'
                     :width='options.index.width'
                     :align='options.index.align'>
    </el-table-column>
    <el-table-column v-for='(item) in options.columns'
                     :key='item.id'
                     :label='item.label'>
      <template slot-scope='scope'>
        <span>
          {{scope.row[item.prop]}}
        </span>
      </template>
    </el-table-column>

    <el-table-column :label='options.handle.label'
                     :width='options.handle.width'
                     :align='options.handle.align'>
      <template slot-scope="scope">
        <el-button v-for='(item) in options.handle.options'
                   :key="item.id"
                   :type="item.type"
                   :size="item.size"
                   @click="item.handle(scope.row)">{{ item.label }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    options: {
      type: Object,
      default () {
        return {
          // 写出来的都是不是默认值的
          border: true,
          maxHeight: 150,
          size: 'medium',
          highlightCurrentRow: true,
          selection: {
            width: 55,
            align: 'center',
            show: true
          },
          index: {
            width: 60,
            align: 'center',
            show: true,
            label: '序号'
          },
          handle: {
            width: 230,
            align: 'center',
            show: true,
            label: '操作',
            options: [
              {
                type: 'primary',
                label: '编辑f',
                size: 'mini',
                handle: (row) => {
                  alert('编辑' + row.name)
                }
              },
              {
                type: 'danger',
                label: '删除',
                size: 'mini',
                handle: (row) => {
                  alert('删除' + row.name)
                }
              }
            ]
          },
          columns: [
            { prop: 'date', label: '日期', width: 250, align: 'center' },
            { prop: 'name', label: '名称', width: 250, align: 'center' },
            { prop: 'address', label: '地址', width: 250, align: 'center' }
          ],
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
          ]
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    }
  }
}
</script>

<style scoped>
</style>

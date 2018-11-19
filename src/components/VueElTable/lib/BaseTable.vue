<!-- 表格数据 -->
<template>
  <el-table :data='tableData'
            :border='configs.border'
            :max-height='configs.maxHeight'
            :size='configs.size'
            :highlight-current-row='configs.highlightCurrentRow'
            @selection-change="configs.selection.handle">
    <el-table-column type='selection'
                     v-show='configs.index.show'
                     :width='configs.selection.width'
                     :align='configs.selection.align'>
    </el-table-column>
    <el-table-column type='index'
                     v-show='configs.index.show'
                     :label='configs.index.label'
                     :width='configs.index.width'
                     :align='configs.index.align'>
    </el-table-column>
    <el-table-column v-for='(item) in configs.columns'
                     :key='item.id'
                     :label='item.label'>
      <template slot-scope='scope'>
        <el-input v-if="configs.editFlag"
                  v-model="scope.row[item.prop]"
                  @keyup.native="alert('asdasd')"></el-input>
        <span v-else>
          <span>{{scope.row[item.prop]}}</span>
        </span>
      </template>
    </el-table-column>

    <el-table-column :label='configs.handle.header.label'
                     :width='configs.handle.header.width'
                     :align='configs.handle.header.align'>
      <template slot-scope="scope">
        <el-button v-for='(val,key) in configs.handle.options'
                   :key="key"
                   :type="val.type"
                   :size="configs.handle.size"
                   @click="val.handle(scope.row)">{{!val.both?val.label:(!scope.row.editFlag?'编辑':'保存')}}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    configs: {
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
            ]
          },
          columns: [
          ]
        }
      }
    },
    tableData: {
      type: Array,
      default () {
        return []
      }
    }

  },
  data () {
    return {
      // 编辑行的标识
      editFlag: false
    }
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

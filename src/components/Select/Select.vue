<template>
  <div>
    <el-input placeholder="请输入内容" v-model="select_input">
      <el-select v-model="select_type" slot="prepend" placeholder="搜索方式">
        <el-option label="网站名" value="1"></el-option>
        <el-option label="网址" value="2"></el-option>
      </el-select>
      <el-button slot="append" icon="search"></el-button>
    </el-input>

    <el-table :data="tableData" style="width: 100%;margin-top: 50px;">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="webname">
              <span>{{ props.row.webname }}</span>
            </el-form-item>
            <el-form-item label="webaddress">
              <span>{{ props.row.webaddress }}</span>
            </el-form-item>
            <el-form-item label="imgpath">
              <span>{{ props.row.imgpath }}</span>
            </el-form-item>
            <el-form-item label="englishabb">
              <span>{{ props.row.englishabb }}</span>
            </el-form-item>
            <el-form-item label="fullpinyin">
              <span>{{ props.row.fullpinyin }}</span>
            </el-form-item>
            <el-form-item label="number">
              <span>{{ props.row.number }}</span>
            </el-form-item>
            <el-form-item label="classid">
              <span>{{ props.row.classid }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="webname"
        prop="webname">
      </el-table-column>
      <el-table-column
        label="webaddress"
        prop="webaddress">
      </el-table-column>
      <el-table-column
        label="classid"
        prop="classid">
      </el-table-column>

      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//import

export default {
  data() {
    return{
      select_type: '',
      select_input: '',
      tableData: [{
        webname: '新浪博客',
        webaddress: 'http://blog.sina.com.cn',
        imgpath: '00200020.jpg',
        englishabb: 'blog',
        fullpinyin: 'xinlangboke',
        number: '2',
        classid: '2'
      }, {
        webname: '新浪博客',
        webaddress: 'http://blog.sina.com.cn',
        imgpath: '00200020.jpg',
        englishabb: 'blog',
        fullpinyin: 'xinlangboke',
        number: '2',
        classid: '2'
      }, {
        webname: '新浪博客',
        webaddress: 'http://blog.sina.com.cn',
        imgpath: '00200020.jpg',
        englishabb: 'blog',
        fullpinyin: 'xinlangboke',
        number: '2',
        classid: '2'
      }, {
        webname: '新浪博客',
        webaddress: 'http://blog.sina.com.cn',
        imgpath: '00200020.jpg',
        englishabb: 'blog',
        fullpinyin: 'xinlangboke',
        number: '2',
        classid: '2'
      }]
    }
  },
  components: {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style>
  .el-select {
    width: 110px;
  }
  .el-input-group {
    width: 600px;
  }


  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

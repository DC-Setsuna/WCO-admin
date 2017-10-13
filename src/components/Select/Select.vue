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
      <el-table-column label="webname" prop="webname">
      </el-table-column>
      <el-table-column label="webaddress" prop="webaddress">
      </el-table-column>
      <el-table-column label="classid" prop="classid">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" custom-class="dialog-width">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域" class="form-select">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片上传" :label-width="formLabelWidth" style="display:block;">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture" :multiple="false" :on-success="onSuccess">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
//import

export default {
  data() {
    return {
      select_type: '',
      select_input: '',
      dialogFormVisible: false,
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
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  components: {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSuccess() {
      console.log('OK')
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

.form-select {
  width: 300px;
}

.el-form-item__content {
  width: 300px;
}

.dialog-width {
  width: 75%;
}

.el-form-item {
  display: inline-block;
}
</style>

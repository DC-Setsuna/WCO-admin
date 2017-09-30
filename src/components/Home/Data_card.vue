<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;" v-text="data_title"></span>
      <el-button style="float: right;" type="primary">Refresh Data</el-button>
    </div>
    <div v-for="o in data_con" :key="o" class="box-card-item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</template>
<script>
//import

export default {
  data() {
    return {}
  },
  components: {},
  props: ['data_title', 'data_con']
}

</script>
<style>
.box-card {
  width: 450px;
  display: inline-block;
  margin: 0px 25px 25px 0px;
}

.box-card-item {
  font-size: 14px;
  padding: 15px 0;
}

</style>

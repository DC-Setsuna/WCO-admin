<template>
  <div class="vheader">
    <div class="header_con">

        <div class="header_title">WCO admin</div>
        <div class="header_nav">
          <el-menu theme="dark" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/">数据概览</el-menu-item>
            <el-menu-item index="/select">数据查询</el-menu-item>
            <el-submenu index="/account">
              <template slot="title">账号管理</template>
              <el-menu-item index="/account/select">查询账号</el-menu-item>
              <el-menu-item index="/account/amend">账号修改</el-menu-item>
              <el-menu-item index="/account/add">新增账号</el-menu-item>
            </el-submenu>
            <el-menu-item index="/database">数据库管理</el-menu-item>
            <el-menu-item index="/log">操作日志</el-menu-item>
            <el-menu-item index="/help">Help</el-menu-item>
          </el-menu>
        </div>


    </div>

  </div>
</template>

<script>
//import

import ElMenuItem from "../../node_modules/element-ui/packages/menu/src/menu-item.vue";


export default {
  data() {
    return{
      activeIndex: '/'
    }
  },
  components: { ElMenuItem },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

  .vheader {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #334258;
    height: 60px;
  }

  .header_title {
    height: 60px;
    line-height: 60px;
    color: #eee;
    font-size: 22px;
    cursor: default;
    float: left;
  }
  .header_con {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .header_nav {
    float: right;
  }



</style>

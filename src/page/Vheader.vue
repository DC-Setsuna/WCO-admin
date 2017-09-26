<template>
  <div class="vheader">
    <el-row>
      <el-menu theme="dark" :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-col :span="4">
              <div class="header_title">WCO admin</div>
            </el-col>

            <el-menu-item index="/">数据概览</el-menu-item>
            <el-menu-item index="/select">数据查询</el-menu-item>
            <el-submenu index="/account">
              <template slot="title">账号管理</template>
              <el-menu-item index="/account/select">查询账号</el-menu-item>
              <el-menu-item index="/account/amend">账号修改</el-menu-item>
              <el-menu-item index="/account/add">新增账号</el-menu-item>
            </el-submenu>
            <el-menu-item index="">数据库管理</el-menu-item>
            <el-menu-item index="/log">操作日志</el-menu-item>
            <el-menu-item index="/help">Help</el-menu-item>

          <el-col :span="4"></el-col>

      </el-menu>
    </el-row>
  </div>
</template>

<script>
//import

import ElMenuItem from "../../node_modules/element-ui/packages/menu/src/menu-item.vue";
import ElCol from "element-ui/packages/col/src/col";
import ElRow from "element-ui/packages/row/src/row";

export default {
  data() {
    return{
      activeIndex: '/'
    }
  },
  components: {
    ElRow,
    ElCol,
    ElMenuItem},
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
  }

  .header_title {
    text-align: center;
    height: 60px;
    line-height: 60px;
    color: #eee;
    font-size: 22px;
    cursor: default;
  }



</style>

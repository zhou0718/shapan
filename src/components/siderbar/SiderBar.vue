<template>
  <div class="leftnav">
    <el-aside>
      <el-menu
              :default-active="$route.path"
              text-color="rgb(191, 203, 217)"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              router>
         <el-submenu index="1-1">
           <template slot="title">导航一</template>
        <el-menu-item-group>
          <el-menu-item index="/"><i class="el-icon-plus"></i>订单管理</el-menu-item>
          <el-menu-item index="/order/test"><i class="el-icon-plus"></i>子菜单</el-menu-item>

        </el-menu-item-group>
         </el-submenu>

        <el-menu-item index="/view"><i class="el-icon-message"></i>网站管理</el-menu-item>
        <!--
                    <el-menu-item index="/company"><i class="el-icon-star-on"></i>接入商</el-menu-item>
          -->
        <el-menu-item index="/report"><i class="el-icon-circle-check"></i>用户管理</el-menu-item>
        <!--          <el-menu-item index="/GeoDistribution"><i class="el-icon-menu"></i>地理分布</el-menu-item>-->
        <!--          <el-menu-item index="/equipment"><i class="el-icon-setting"></i>导出配置</el-menu-item>-->
        <el-menu-item index="/file_scan"><i class="el-icon-setting"></i>代理管理</el-menu-item>
        <!-- <el-menu-item index="/config"><i class="el-icon-setting"></i>参数配置</el-menu-item>
          <el-menu-item index="/query"><i class="el-icon-search"></i>数据查询</el-menu-item>-->

      </el-menu>
    </el-aside>
   <!-- <div> <router-view></router-view></div>-->
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style >
  .leftnav{
    position: fixed;
    left: 0;
    top: 0;
    width: 150px;
    height: 100%;;
    background-color: rgb(48, 65, 86);
    text-align: left;
    padding-top: 1%;
  }
  .el-aside {
    width: 150px !important;
    height: 100%;
  }
  ul li {
    font-size: 16px;
    text-align: left;
    background-color: rgb(48, 65, 86);
  }
  .el-submenu .el-menu-item {
    min-width: 180px;
  }
  .el-menu {
    height: 100%;
    background-color: rgb(48, 65, 86) !important;
  }

</style>


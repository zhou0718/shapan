<template>
  <div class="leftnav">
    <div class="logo-title">
      <img src="../../assets/image/logo.jpg">
      <span class="my-title">/IPv6资产</span>
      <!-- <span>
         <span class="name">奇安信</span>
         <span class="desc">资产探查平台</span>
       </span>-->
    </div>
    <el-aside >
      <el-menu
              :default-active="$route.path"
              text-color="hsla(0,0%,100%,.45)"
              active-text-color="#fff"
              background-color="#001529"
              class="menu"
              style="border:none;"
              @open="handleOpen"
              @close="handleClose"
              router>

       <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-plus"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="/order">选项1</el-menu-item>
            <el-menu-item index="/website">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span>网站管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="/order">选项1</el-menu-item>
            <el-menu-item index="/website">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-circle-check"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="/order">选项1</el-menu-item>
            <el-menu-item index="/website">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>代理管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="/order">选项1</el-menu-item>
            <el-menu-item index="/website">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>-->

        <el-submenu index="/order">
          <template slot="title">
            <i class="el-icon-plus"></i>
            <span>可视化</span>
          </template>
          <el-menu-item-group class="submenu">
            <template slot="title"></template>
            <el-menu-item index="/order">前缀地址树</el-menu-item>
            <el-menu-item index="/demo">空间地理映射</el-menu-item>
           <!-- <el-menu-item index="1-3">安全管理摘要</el-menu-item>
            <el-menu-item index="1-4">脆弱性分析</el-menu-item>
            <el-menu-item index="1-5">健康与状态</el-menu-item>-->
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span>路由</span>
          </template>
          <el-menu-item-group class="submenu">
            <template slot="title"></template>
            <el-menu-item index="/explore">探测</el-menu-item>
            <el-menu-item index="/statistics">统计</el-menu-item>
            <el-menu-item index="/website">查看</el-menu-item>
           <!-- <el-menu-item index="2-2">ip地址池</el-menu-item>
            <el-menu-item index="2-2">脆弱性</el-menu-item>-->
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-add-location"></i>
            <span>地址</span>
          </template>
          <el-menu-item-group class="submenu">
            <template slot="title"></template>
            <el-menu-item index="/addrExplore">探测</el-menu-item>
            <el-menu-item index="/addrStatistics">统计</el-menu-item>
            <el-menu-item index="/addrView">查看</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-service"></i>
            <span>服务</span>
          </template>
          <el-menu-item-group class="submenu">
            <template slot="title"></template>
            <el-menu-item index="/serviceExplore">探测</el-menu-item>
            <el-menu-item index="/serviceStatistics">统计</el-menu-item>
            <el-menu-item index="/serviceView">查看</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>位置</span>
          </template>
          <el-menu-item-group class="submenu">
            <template slot="title"></template>
            <el-menu-item index="/localExplore">探测</el-menu-item>
            <el-menu-item index="/dot">统计</el-menu-item>
            <el-menu-item index="/localView">查看</el-menu-item>
           <!-- <el-menu-item index="5-2">标签管理</el-menu-item>
            <el-menu-item index="5-2">搜索管理</el-menu-item>
            <el-menu-item index="5-2">高级设置</el-menu-item>-->
          </el-menu-item-group>
        </el-submenu>

      <!--  <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span>报表</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="6-1">我的报表</el-menu-item>
            <el-menu-item index="6-2">所有报表</el-menu-item>
            <el-menu-item index="6-2">所有报表结果</el-menu-item>
            <el-menu-item index="6-2">回收站</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-circle-check"></i>
            <span>配置</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="7-1">账号管理</el-menu-item>
            <el-menu-item index="7-2">用户分组</el-menu-item>
            <el-menu-item index="7-2">授权信息</el-menu-item>
            <el-menu-item index="7-2">第三方集成</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
-->
        <!--
        <el-menu-item index="/submit"><i class="el-icon-plus"></i>订单提交</el-menu-item>
        -->


        <!-- <el-submenu index="1-1">
           <template slot="title">订单管理</template>
        <el-menu-item-group>
          <el-menu-item index="/"><i class="el-icon-plus"></i>订单管理</el-menu-item>
          <el-submenu>
          <el-menu-item index="/order/test"><i class="el-icon-plus"></i>子菜单</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
         </el-submenu>-->

      <!--  <el-menu-item index="/website"><i class="el-icon-message"></i>网站管理<i class="icon el-icon-arrow-right"></i></el-menu-item>-->
        <!--
                    <el-menu-item index="/company"><i class="el-icon-star-on"></i>接入商</el-menu-item>
          -->
      <!--  <el-menu-item index="/user"><i class="el-icon-circle-check"></i>用户管理 <i class="icon el-icon-arrow-right"></i></el-menu-item>-->
        <!--          <el-menu-item index="/GeoDistribution"><i class="el-icon-menu"></i>地理分布</el-menu-item>-->
        <!--          <el-menu-item index="/equipment"><i class="el-icon-setting"></i>导出配置</el-menu-item>-->
<!--        <el-menu-item index="/proxy"><i class="el-icon-setting"></i>代理管理 <i class="icon el-icon-arrow-right"></i></el-menu-item>-->
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
    height: 100%;
    width: 250px;
   /* min-width: 250px;
    min-height: 100%;*/
    /*padding-top: 64px;*/
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    position: fixed;
    z-index: 10;
    flex: 0 0 250px;
    background-color: #001529;
    /*float: left;*/
    /*height: 100%;*/

   /* background-color: rgb(50, 65, 87);*/
    /*text-align: left;*/
   /* padding-top: 1%;*/
  }
.logo-title{
  position: relative;
  height: 60px;
  color: #fff;
  border-bottom: 2px solid #333;
}
 .logo-title img{
   position: relative;
   top: 5px;
 }
 .my-title{
   position: absolute;
   right: 40px;
   bottom: 4px;
   color: #ccc;
   font-size: 15px;
 }
/*.logo-title .name{
  position: relative;
  top: -20px;
  left: 30px;
  font-size: 24px;
}
.logo-title .desc{
  font-size: 14px;
  position: relative;
  left: -45px;
}*/
  .el-aside {
    width: 250px !important;
    min-height: 100%;
    height: 100%;
    position: relative;
    font-size: 12px;
    background-color: #001529 !important;
  }
 /* ul li {
    font-size: 16px;
    text-align: left;
   !* background-color: rgb(48, 65, 86);*!
  }*/



  .menu-logo{
    position: relative;
    padding: 0 24px;
    overflow: hidden;
    background: #001529;
    cursor: pointer;
    color:#fff;
  }
  .icon{
    float: right;
    width: 8px;
    height: 8px;
    position: relative;
    top: 25px;
  }
  .submenu{
    position: relative;
    left: 40px;
  }
</style>

<!--<template>
  <div class="leftnav">
    <div class="logo-title">
      <img src="../../assets/image/logo.jpg">
    </div>
    <ul>
      <li @click="showMenu">
        <span>仪表盘</span>
        <span style="float: right" class="iconfont icon-arrow"></span>
      </li>
      <li @click="showMenu">资产</li>
      <li @click="showMenu">事件</li>
      <li @click="showMenu">发现</li>
      <li @click="showMenu">运营</li>
      <li @click="showMenu">报表</li>
      <li @click="showMenu">配置</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name:'',
    data(){
      return{

      }
    },
    methods:{
      showMenu(){

      }
    }
  }
</script>

<style>
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .leftnav{
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    color: #fff;
    background-color: #001529;
  }

  .logo-title{
    position: relative;
    left: 15px;
  }

</style>-->




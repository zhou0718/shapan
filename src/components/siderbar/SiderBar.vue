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


        <el-submenu index="/order">
          <template slot="title">
            <i class="el-icon-plus"></i>
            <span>IPv6可视化</span>
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
            <span>IPv6路由宣告</span>
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
            <span>IPv6地址分配</span>
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
            <span>IPv6网站服务</span>
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
            <span>IPv6地理位置</span>
          </template>
          <el-menu-item-group class="submenu">
            <template slot="title"></template>
            <el-menu-item index="/localExplore">探测</el-menu-item>
            <el-menu-item index="/localStatistics">统计</el-menu-item>
            <el-menu-item index="/localView">查看</el-menu-item>

          </el-menu-item-group>
        </el-submenu>


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
    top: -20px;
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




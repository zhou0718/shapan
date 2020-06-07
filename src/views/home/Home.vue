<template>
  <div class="home">
    <el-container>
        <el-header>
            <div class="menu-wrapper">
            <el-menu mode="horizontal">
                <el-menu-item index="1">产品</el-menu-item>
                <el-menu-item index="2">服务支持</el-menu-item>
                <el-menu-item index="3">关于我们</el-menu-item>
            </el-menu>
            </div>
            <div class="login-menu">
                <div>
                    <span>
                        <router-link to="/login">
                        登录
                        </router-link>
                    </span>
                    <span>
                        <router-link to="/login">
                        注册
                        </router-link>
                    </span>
                </div>
            </div>
        </el-header>
        <el-main>
            <router-view>
            </router-view>
            <el-row>
            <div class="main-wrap">
                <div class="main-banner-wrapper">
                <div class="flex-col main-banner-cont">
                    <div class="main-banner-title">IPv6一键通</div>
                    <p class="main-banner-descrip">代理说明文本</p>
                    <div class="main-banner-btns">
                        <a class="main-banner-button btn-a">在线咨询</a>
                        <a class="main-banner-button btn-a" href="/submit">立即购买</a>
                    </div>
                </div>
                </div>
            </div>
           </el-row>
            <el-row>

                <div class="pic-wrap">
                    <p class="items">简单、快速、安全</p>
                    <img src="../../assets/image/IPv6.png" class="home-pic">
                    <img src="../../assets/image/IPv6-2.png" class="home-pic">
                </div>
            </el-row>
        </el-main>
        <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
 .home{
   width: 100%;
   background: #fff;
 }
 .login-menu{
     position: absolute;
     right: 10px;
     top: 0;
     width: 150px;
     height: 60px;
     line-height: 60px;
 }
 .login-menu span{
     margin: 0 10px;
 }
 .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ghostwhite;
}

.main-banner-cont {
    background: url(../../assets/image/banner.jpg);
    height: 314px;
    align-items: flex-start;
    padding-right: 50%;
    min-width: 600px;
}
.main-banner-title {
    font-size: 44px;
    margin-left: 120px;
    color:#fff;
}
.main-banner-descrip{
    margin-top: 20px;
    margin-left: 120px;
    color:#fff;
}
.main-banner-btns{
    margin-top: 10px;
    margin-left: 120px;
    color:#fff;
}
.main-banner-button {
    width: 175px;
    height: 46px;
    line-height: 46px;
    font-size: 18px;
    margin-right: 20px;
}
.btn-a {
    display: inline-block;
    border: none;
    padding: 0;
    background-color: #20b09f;
    color: #fff;
    box-sizing: border-box;
    text-align: center;
}
.pic-wrap{
    margin: 0 auto;
    position: relative;
    width: 1200px;
    text-align: center;
}
.home-pic{
    cursor: pointer;
    height: 700px;
    width: 800px;
    border-radius: 10px;
    color: rgba(0,0,0,.65);
}
.items{
    font-size: 32px;
}
.el-footer{
 background:rgba(0,0,0,.85);
 text-align: center;
}
.el-main {
    padding: 20px 0 0 0;
}
</style>

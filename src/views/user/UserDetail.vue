<template>
  <div class="userdetail">
      
    <div class="form-wrapper">
      <h3>用户信息</h3>
      <el-form label-position="left" label-width="80px" >
        <el-form-item  label="用户名 :">
          <el-input  :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="角色 :">
          <el-input  :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="权限 :">
          <el-input  :disabled="true"></el-input>
        </el-form-item>
        <!--<el-form-item label="服务类型:">

        </el-form-item>
        <el-form-item label="网站业务概述:">

        </el-form-item>-->
      </el-form>
  </div>

    
    <div class="form-wrapper">
      <h3>历史订单</h3>
        <el-form label-position="left" label-width="80px" >
        <el-form-item label="订单号 :">
            <el-input  :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="时间 :">
          <el-input  :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="消费业务 :">
          <el-input  :disabled="true"></el-input>
        </el-form-item>
        <!--<el-form-item label="服务类型:">

        </el-form-item>
        <el-form-item label="网站业务概述:">

        </el-form-item>-->
      </el-form>
    </div>
   <!-- <div>
      <span>用户信息</span>
      <el-form label-position="left" label-width="80px" :model="form" style="margin: 0 auto">
        <el-form-item label="域 名 :">
          <el-input v-model="form.domainName" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="IPV4地址 :">
          <el-input v-model="form.ipList" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="机 构 :">
          <el-input v-model="form.org" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="服务类型 :">
          <el-input v-model="form.serviceType" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="描 述 :">
          <el-input v-model="form.descr" style="width:350px"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <span>历史订单</span>
      <el-form label-position="left" label-width="80px" :model="form" style="margin: 0 auto">
        <el-form-item label="域 名 :">
          <el-input v-model="form.domainName" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="IPV4地址 :">
          <el-input v-model="form.ipList" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="机 构 :">
          <el-input v-model="form.org" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="服务类型 :">
          <el-input v-model="form.serviceType" style="width:350px"></el-input>
        </el-form-item>
        <el-form-item label="描 述 :">
          <el-input v-model="form.descr" style="width:350px"></el-input>
        </el-form-item>
      </el-form>
    </div>-->
    </div>

</template>

<script>
  export default {
    name: "UserDetail",
    data(){
      return{
       username: ''
      }
    }
  }
</script>

<style scoped>
.userdetail{
  
  padding: 30px;
  height: 80%;
  background: #fff;
}
.form-wrapper{
    margin: 0 auto;
    width: 50%;
  }
</style>

<!--
&lt;!&ndash;点击订单页面的详情显示的页面信息&ndash;&gt;
<template>
  <div class="detail">
    <el-form label-position="left" label-width="100px" :rules="rules" :model="form" aria-autocomplete="on" style="margin: 0 auto">
      <el-form-item label="域 名 :" prop="domainName">
        <el-input  ref="domainName" v-model="form.domainName" style="width:350px"></el-input>
      </el-form-item>
      <el-form-item label="IPV4地址 :" prop="ipList">
        <el-input ref="ipList" v-model="form.ipList" style="width:350px" ></el-input>
      </el-form-item>
      <el-form-item label="机 构 :">
        <el-input v-model="form.org" style="width:350px" ></el-input>
      </el-form-item>
      <el-form-item label="服务类型 :">
        <el-input v-model="form.serviceType" style="width:350px" ></el-input>
      </el-form-item>
      <el-form-item label="描 述 :">
        <el-input v-model="form.descr" style="width:350px" ></el-input>
      </el-form-item>
    </el-form>
    <div class="bottom"><el-button type="primary" size="medium" style="float: right;margin-right: 150px;margin-top: 20px" >提交</el-button></div>
  </div>
</template>

<script>
  import {requestOrderDetail} from "../../network/requestOrder";
  export default {
    name: "Detail",
    data() {
      /*const domain = (rule, value, callback) => {
        if (value==='') {
           callback(new Error('域名不能为空'))
        } else {
          callback()
        }
      }*/
    /*  const ip = (rule, value,callback) => {
        if(!value){
         return callback(new Error("ip地址不能为空"))
        }else
          callback()
      }*/
      return {
        labelPosition: 'left',
        orderId: 0,
        form: {
          domainName: '',
          ipList: '',
          org: '',
          serviceType: '',
          descr: ''
        },
        rules: {
          domainName: [{required: true,trigger: blur, message: '域名不能为空'}],
          ipList: [{required: true,  trigger: blur ,}]
        },
      }
    },


    methods :{

    }
  }
</script>

<style scoped>
  .detail{
    width: 430px;
    margin: 0 auto;
  }
</style>-->
<template>
  <div class="submit">
    <div class="form-wrapper">
    <p>订单提交</p>
    <el-form :model="ruleForm" status-icon :rules="rules" label-position="left" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="域名" prop="domainName">
        <el-input  v-model="ruleForm.domainName" autocomplete="off" placeholder="请输入域名信息"></el-input>
      </el-form-item>

      <el-form-item label="ip地址" prop="ipList">
        <el-input  v-model="ruleForm.ipList" autocomplete="off" placeholder="请输入ip地址"></el-input>
      </el-form-item>

      <el-form-item label="机构" prop="org">
        <el-input  v-model="ruleForm.org" autocomplete="off" placeholder="请输入机构名称"></el-input>
      </el-form-item>

      <!--<el-form-item label="服务类型" prop="serviceType">
        <el-input  v-model="ruleForm.serviceType" autocomplete="off" placeholder="请输入域服务类型"></el-input>
      </el-form-item>-->

      <el-form-item label="描述" >
        <el-input  v-model="ruleForm.describe"  autocomplete="off" placeholder="请输入描述信息"></el-input>
      </el-form-item>



      <!--<el-form-item label="订单时间" prop="checkPass">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">&#45;&#45;&#45;&#45;</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="ruleForm.time" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>-->

      <el-form-item label="订单时间" prop="number">
        <el-input v-model="currentTime" disabled ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
  import {requestSubmit} from "../../network/requestOrder";

  export default {
    data() {
      /*var checkNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('订单号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('订单'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('订单信息不能为空'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('订单时间必须填写'));
        } /!*else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        }*!/ else {
          callback();
        }
      };*/

      return {
        ruleForm: {
          domainName: '',
          ipList: '',
          serviceType: '',
          describe: '',
          org: '',
        },

        currentTime: '',
        rules: {
          domainName: [
            { required:true, message:'域名不能为空', trigger: 'blur'  }
          ],
          ipList: [
            {  required:true,  trigger: 'blur', message:'ip地址必须填写' }
          ],
          serviceType: [
            {  required:true, message:'服务类型不能为空', trigger: 'blur'}
          ],
          org: [
            {  required:true, message:'机构信息不能为空', trigger: 'blur' }
          ],
        }
      };
    },
    mounted(){
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
     this.currentTime = year + seperator1 + month + seperator1 + strDate;
      console.log(this.currentTime);
    },
    methods: {
      submitForm() {
       this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            requestSubmit(this.ruleForm.domainName,this.ruleForm.ipList,this.ruleForm.org,this.ruleForm.describe).then(res => {
              /*console.log(formName);
              console.log(formName.domain);*/
              if(res.data){
                this.$message.success("提交成功")
              }else{
                this.$message.success("请先登录")
              }             
            }).catch(error => {
              this.$message.error(error)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style scoped>
  .submit{
    margin: 50px auto;
    height: 80%;
    width: 80%;
    padding: 30px;
    background-color: #fff;
  }
  .form-wrapper{
    margin: 0 auto;
    width: 50%;
  }
  ul li{
    background-color: #fff;
  }
</style>

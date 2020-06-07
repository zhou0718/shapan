
<!--点击订单页面的详情显示的页面信息-->
<template>
  <div class="detail">
    <div class="form-wrapper">
    <el-form label-position="left" label-width="90px" :model="form" style="margin: 0 auto">
      <el-form-item label="域 名 :">
        <el-input v-model="form.domainName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="IPV4地址 :">
        <el-input v-model="form.ipList"  :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="机 构 :">
        <el-input v-model="form.org"  :disabled="true"></el-input>
      </el-form-item>
<!--      <el-form-item label="服务类型 :">-->
<!--        <el-input v-model="form.serviceType"  :disabled="true"></el-input>-->
<!--      </el-form-item>-->


      <!--<el-form-item label="url :">
        <el-input v-model="form.url"  :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="http状态码 :">
        <el-input v-model="form.httpStatusCode"  :disabled="true"></el-input>
      </el-form-item>-->

      <el-form-item label="描 述 :">
        <el-input v-model="form.descr"  :disabled="true"></el-input>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
  import {requestOrderDetail} from "../../network/requestOrder";
  export default {
    name: "Detail",
    data() {
      return {
        labelPosition: 'left',
        form: {},
        orderId: 0,
      }
    },

    mounted() {
      this.getData()
     /* requestOrderDetail(this.$route.params.orderId).then(res => {
        this.data = res.data
        console.log(res);
      })*/
      // let postData = this.$qs.stringify({
      //   orderId: this.$route.params.orderId,
      // })
      /*axios.post('http://10.6.101.25:8087/order/detail',{orderId:this.$route.params.orderId}).then(res => {
        console.log(res);
      })*/
    },

    methods :{
      getData(){
        this.orderId = this.$route.query.orderId
        requestOrderDetail(this.orderId).then(res =>{
         this.form = res.data.data
          console.log(this.form);
         /* this.tableData = this.tableData.push(res.data)
          console.log(this.tableData);*/
        })
      }
    }
  }
</script>

<style scoped>
.detail{
  flex: auto;
  height: 65%;
  background: #fff;
  padding: 50px;

  /*margin: 0 auto;*/
}
.form-wrapper{
  width: 50%;
  margin: 0 auto;
}
</style>

<template>
  <div class="webiste">
    <el-table
       :data="tableData"
        stripe
        border
        fit
        style="width: 100%"
        :header-cell-style="{'text-align':'left'}"
    >
     <!-- <el-table-column
        type="index"
        label="id"
        width="50px"
      />

      <el-table-column
         prop="orderId"
         label="订单号"
         width="200px"
      />-->
<!--      <el-table-column-->
<!--              prop="id"-->
<!--              label="id" />-->

      <el-table-column
         prop="domainName"
         label="域名" />

      <el-table-column
         prop="isAgency"
         label="是否开启代理" >
        <template slot-scope="scope">
          {{agency(scope.row)}}
        </template>
      </el-table-column>

      <el-table-column
        prop="agencyServer"
        label="代理服务器" />

      <el-table-column
        label="修改状态" >
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="start(scope.row,scope.$index)">启动代理</el-button>
          <el-button type="text" size="medium" @click="stop(scope.row,scope.$index)">停止代理</el-button>
        </template>
      </el-table-column>

      <el-table-column
              label="详情"
              >
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="check(scope.row,scope.$index)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" style="float: right;margin-right: 5%;margin-top: 3%">
     <!-- <el-pagination
         :size-change="handleSizeChange"
         :current-change="handleCurrentChange"
         :current-page="currentPage"
         :page-size="10"
         layout="total,prev,pager,next,jumper"
         :total="400" >

      </el-pagination>-->
    </div>
  </div>
</template>

<script>
  import {requestWebsiteList, requestStop,requestStart} from "../../network/requestWebsite";

  export default {
    name: "index",
    data(){
      return{
        tableData:[],
        currentPage:1,
      }
    },
    mounted(){
      this.getWebsiteData()
    },

    methods:{
      getWebsiteData(){
        requestWebsiteList().then(res => {
          // console.log(res.data);
          this.tableData = res.data.data
        })
      },
      agency(row){
        if(row.isAgency === 1){
          return "代理中"
        }else
          return "代理停止"
      },

      start(row,index){  //启动代理服务
        requestStart(row.id).then(res => {
          this.$message.success("开启代理成功")
          console.log(res.data.data);
        }).catch(error => {
          this.$message.error(error)
        })
      },

      stop(row,index){  //停止代理服务
        requestStop(row.id).then(res => {
          // console.log(res);
          this.$message.success("停止代理成功")
        }).catch(error => {
          this.$message.error(error)
        })
      },
     /* start(row,index){  //启动代理服务
        let status = 1
        requestUpdate(row.domainName,status).then(res => {
              this.$message.success("代理成功")
            }).catch(error => {
              this.$message.error(error)
            })

      },
      end(row,index){  //停止代理服务
        let status = 0
        requestUpdate(row.domainName,status).then(res => {
              this.$message.success("代理已停止")
            }).catch(error => {
              this.$message.error(error)
            })

      },*/

      check(row,index){  //查看详情
          this.$router.push({path:'/website/detail', query:{id:row.id,index: index}})
      }
    }
  }
</script>

<style scoped>
 .webiste{

 }
</style>

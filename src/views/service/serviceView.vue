<template>
  <div class="serView">
    <el-table
            :data="tableData"
            stripe
            border
            fit
            :header-cell-style="{'text-align':'left'}">
      <el-table-column
              type="index"/>
      <el-table-column
              prop="siteName"
              label="site_name" />

      <el-table-column
              prop="siteType"
              label="site_type" />
      <el-table-column
              prop="cname"
              label="cname" />

      <el-table-column
              prop="ns"
              label="NS" />

      <el-table-column
              prop="v6DnsStatus"
              label="v6_dns_status" />

      <el-table-column
              prop="v6Address"
              label="v6_address" />
      <el-table-column
              prop="probeTime"
              label="probe_time" />
    </el-table>
    <el-pagination
            class="pager"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import {requestService} from "../../network/requestIPv6";

  export default {
    name: "serView",
    data(){
      return{
        active:0,
        tableData:[],
        total: 0,
        pageSize: 50,
        currentPage:1,
      }
    },
    mounted(){
      requestService(this.currentPage,this.pageSize).then(res => {
        let data = res.data.data;
        this.total = data.total;
        this.tableData = data.data
      })
    },
    methods:{
      startExplore(){
        /*  setTimeout(function () {
            if(this.active++ > 3){
              this.active = 0;
            }
          },2000)*/
        if(this.active++ > 3){
          this.active = 0;
        }
      },
      handleCurrentChange(val) {
        requestService(val,this.pageSize).then(res => {
          let data = res.data.data
          this.tableData = data.data;
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    }
  }
</script>

<style scoped>
 .serView{

 }
 .pager{
   width: 500px;
   background-color: #f8f8f8;
   margin-top: 15px;
 }
</style>

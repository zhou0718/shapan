<template>
  <div class="webiste">
    <el-table
            :data="tableData"
            stripe
            border
            fit
            :header-cell-style="{'text-align':'left'}">
      <el-table-column
              prop="network"
              label="network" />

      <el-table-column
              prop="netname"
              label="netname" />
      <el-table-column
              prop="descr"
              label="descr" />

      <el-table-column
              prop="company"
              label="company" />

      <el-table-column
              prop="province"
              label="province" />

      <el-table-column
              prop="city"
              label="city" />
      <el-table-column
              prop="country"
              label="country" />
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
  import {requestGeo} from "../../network/requestIPv6";

  export default {
    name: "localView",
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
      requestGeo(this.currentPage,this.pageSize).then(res => {
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
        requestGeo(val,this.pageSize).then(res => {
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
 .webiste{

 }
 .pager{
   width: 500px;
   background-color: #f8f8f8;
   margin-top: 15px;
 }
</style>

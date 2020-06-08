<template>
  <div class="addView">
    <el-table
            :data="tableData"
            stripe
            border
            fit
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
              prop="inet6num"
              label="inet6num" />

      <el-table-column
              prop="netname"
              label="netname" >
        <!--<template slot-scope="scope">

        </template>-->
      </el-table-column>

      <el-table-column
              prop="descr"
              label="descr" />

      <el-table-column
              prop="country"
              label="country" >
        <!--<template slot-scope="scope">
          <el-button type="text" size="medium" @click="start(scope.row,scope.$index)">启动代理</el-button>
          <el-button type="text" size="medium" @click="stop(scope.row,scope.$index)">停止代理</el-button>
        </template>-->
      </el-table-column>

      <el-table-column
              prop="adminC"
              label="admin_c">
        <!--<template slot-scope="scope">
          <el-button type="text" size="medium" @click="check(scope.row,scope.$index)">查看详情</el-button>
        </template>-->
      </el-table-column>
      <el-table-column
              prop="techC"
              label="tech_c" />
      <el-table-column
              prop="notify"
              label="notify" />
      <el-table-column
              prop="changed"
              label="changed" />
      <el-table-column
              prop="source"
              label="source" />
      <el-table-column
              prop="mntBy"
              label="mnt_by" />
      <el-table-column
              prop="status"
              label="status" />
      <!-- <el-table-column
               prop="remarks"
               label="remarks" />-->
      <el-table-column
              prop="mntLower"
              label="mnt_lower" />
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
  import {requestAddr} from "../../network/requestIPv6";

  export default {
    name: "addView",
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
      requestAddr(this.currentPage,this.pageSize).then(res => {
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
        requestAddr(val,this.pageSize).then(res => {
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
 .addView{

 }
 .pager{
   width: 500px;
   background-color: #f8f8f8;
   margin-top: 15px;
 }
</style>

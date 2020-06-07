<template>
  <div  class="user" >
    <el-table
      :data="tableData"
      stripe
      border
        fit
        style="width: 100%"
        :header-cell-style="{'text-align':'left'}">

      <!--<el-table-column
        type="index"
        width="50px" />


      <el-table-column
        prop="password"
        label="密 码"
        width="200px" />-->

    <!--  <el-table-column
        prop="level"
        label="level"
        width="200px" />-->
      <el-table-column
        type="selection"
        
      />

      <el-table-column
              prop="username"
              label="用户名"
              />

      <el-table-column
        prop="org"
        label="机 构"
        />

      <el-table-column
        prop="email"
        label="邮 箱"
        />

      <el-table-column
          prop="phone"
          label="手机号"
           />

      <el-table-column
        label="详情"
        >
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="detail(scope.row,scope.$index)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--
    <div class="block" style="float: right;margin-right: 5%;margin-top: 3%">
     &lt;!&ndash; <el-pagination
              :size-change="handleSizeChange"
              :current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="10"
              layout="total,prev,pager,next,jumper"
              :total="400" >

      </el-pagination>&ndash;&gt;
    </div>-->
  </div>
</template>

<script>
  import {requestUserList} from "../../network/requestUser";

  export default {
    name: "index",
    data(){
      return{
        tableData:[],
        currentPage:1
      }
    },
    mounted() {
      this.getUserData()
    },
    methods:{
      getUserData(){
        requestUserList().then(res => {
          this.tableData = res.data.data
        })
      },
      detail(row,index){  //点击跳转详情页
        /*this.$confirm('是否删除该用户的信息？', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })*/
        this.$router.push({path:'/user/detail',query:row.username})
      }
    }
  }
</script>

<style scoped>
.user{

}
</style>

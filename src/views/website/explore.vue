<template>
  <div class="explore">
    <div class="explore-top">
      <el-button type="primary" @click="startExplore">开始探测</el-button>
      <div class="my-steps">
      <el-steps :active="active" finish-status="success">
        <el-step title="开始探测"></el-step>
        <el-step title="加载探测目标"></el-step>
        <el-step title="下载分析结果"></el-step>
        <el-step title="生成结果"></el-step>
      </el-steps>
     </div>
    </div>
    <div class="explore-table">
      <el-table
              :data="tableData"
              stripe
              border
              style="width: 100%">
        <el-table-column
                prop="route6"
                label="route6"
                width="150px">
        </el-table-column>
        <el-table-column
                prop="desc"
                label="desc"
                >
        </el-table-column>
        <el-table-column
                prop="origin"
                label="origin">
        </el-table-column>
        <el-table-column
                prop="org"
                label="org"
                width="130px">
        </el-table-column>
        <el-table-column
                prop="mntBy"
                label="mnt_by">
        </el-table-column>
        <el-table-column
                prop="lastModified"
                label="lastModified">
        </el-table-column>
        <el-table-column
                prop="source"
                label="source">
        </el-table-column>
       <!-- <el-table-column
                prop="remarks"
                label="remarks">
          &lt;!&ndash;<template slot-scope="scope">

          </template>&ndash;&gt;
        </el-table-column>-->
        <el-table-column
                prop="mntLower"
                label="mnt_lower">
        </el-table-column>
        <el-table-column
                prop="notify"
                label="notify">
        </el-table-column>
        <el-table-column
                prop="memberOf"
                label="memberOf">
        </el-table-column>
        <el-table-column
                prop="mntRoutes"
                label="mnt_routes">
        </el-table-column>
      </el-table>
    </div>
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
  import {requestExplore} from "../../network/requestIPv6";

  export default {
    name: "explore",
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
      requestExplore(this.currentPage,this.pageSize).then(res => {
        let data = res.data.data;
        this.total = data.total;
        this.tableData = data.data
      })
    },
    methods:{
      startExplore(){
      /* setTimeout(function () {
         if(this.active++ > 3){
           this.active = 0;
         }
       },2000)*/
        if(this.active++ > 3){
          this.active = 0;
        }
      },
      handleCurrentChange(val) {
        requestExplore(val,this.pageSize).then(res => {
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
  .explore-top{
    /*margin-left: 30px;*/
  }
.my-steps{
  display: inline-block;
  width: 900px;
  position: relative;
  left: 100px;
  top: -10px;
}
  .pager{
    width: 500px;
    background-color: #f8f8f8;
    margin-top: 15px;
  }
</style>

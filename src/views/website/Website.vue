<template>
  <div class="webiste">
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
                label="desc">
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
  /*import {requestWebsiteList, requestStop,requestStart} from "../../network/requestWebsite";*/
  import {requestExplore,requestView} from "../../network/requestIPv6";

  export default {
    name: "index",
    data(){
      return{
        tableData:[],
        currentPage:1,
        total: 0,
        pageSize: 50,
      }
    },
    mounted(){
      requestExplore(this.currentPage,this.pageSize).then(res => {
        let data = res.data.data
        // console.log(data);
        this.tableData = data.data;
        this.total = data.total;
      })
    },

    methods:{
      handleCurrentChange(val) {
        requestExplore(val,this.pageSize).then(res => {
          let data = res.data.data
          this.tableData = data.data;
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
   /*   getWebsiteData(){
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
      },*/
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
 .pager{
   width: 500px;
   background-color: #f8f8f8;
   margin-top: 15px;
 }
</style>

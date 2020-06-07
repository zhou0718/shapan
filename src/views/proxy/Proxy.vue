<template>
  <div>
    <el-table
            :data="tableData"
            stripe
            border
            fit
            style="width: 100%"
            :header-cell-style="{'text-align':'left'}">
       <el-table-column
              prop="id"
              label="服务器ID"
             />
      <el-table-column
              prop="ip"
              label="IP地址"
             />

      <el-table-column
              prop="macAddr"
              label="MAC地址"
               />
       <el-table-column
              prop="agencyWebsite"
              label="代理网站数"
             />

    </el-table>   
  </div>
</template>

<script>

import {requestServerList} from "../../network/requestProxy";

export default {
    name: "Proxy",
    data(){
      return{
        tableData: []
      }
    },
    mounted() {
      this.getData()
    },
    methods:{
      getData(){
        requestServerList().then(res => {
          this.tableData = res.data.data
          console.log(this.tableData);
          /* this.webIp = res.data.data[this.index].webIp
           this.visitTime = res.data.data[this.index].visitTime*/
        })
      }
    }
  }
</script>

<style scoped>

</style>


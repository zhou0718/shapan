<template>
 <div class="my-charts">
   <div>
     <div id="bar" :style="{width:'600px',height:'400px'}"></div>
   </div>

   <div>
     <div id="pie" :style="{width:'600px',height:'400px'}"></div>
   </div>
 </div>
</template>

<script>
  let echarts1 = require('echarts/lib/echarts')
  let echarts2 = require('echarts/lib/echarts')
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
 export  default {
   name:'webStatistics',
   data(){
     return{

     }
   },
   mounted() {
     this.drawBar();
     this.drawPie()
   },
   methods:{
     drawBar(){
        let myCharts1 = echarts1.init(document.getElementById('bar'))
        myCharts1.setOption(  {

          xAxis: {

            type: 'category',

            data: ['AS17622', 'AS4134', 'AS9808', 'AS4837', 'AS4808', 'AS17621', 'AS7497', 'AS17623', 'AS4809', 'AS4812', 'AS23650', 'AS139007', 'AS17816', 'AS56047', 'AS56040', 'AS24445', 'AS37963', 'AS24151', 'AS38283', 'AS24547']

          },

          yAxis: {

            type: 'value'

          },

          series: [{

            data: [502, 502, 378, 305, 232, 189, 165, 157, 123,  92, 77, 69, 58, 49, 49, 42, 39, 37, 36, 35],

            type: 'bar'

          }]

        })
     },
     drawPie(){
       let myCharts2 = echarts2.init(document.getElementById('pie'))
       myCharts2.setOption( {
         title: {

           text: '国内主要机构IPv6地址分配排名',

           subtext: '纯属虚构',

           left: 'center'

         },

         tooltip: {

           trigger: 'item',

           formatter: '{a} <br/>{b} : {c} ({d}%)'

         },

         legend: {

           orient: 'vertical',

           left: 'left',

           data: ['CNNIC', '中国电信', '赛尔网络', '中国移动', '中国联通', '教育网', '腾讯', 'BII']

         },

         series: [

           {

             name: '访问来源',

             type: 'pie',

             radius: '55%',

             center: ['50%', '60%'],

             data: [

               {value: 16390, name: 'CNNIC'},

               {value: 16386, name: '中国电信'},

               {value: 4116, name: '赛尔网络'},

               {value: 4097, name: '中国移动'},

               {value: 4097, name: '中国联通'},
               {value: 2056, name: '教育网'},
               {value: 256, name: '腾讯'},
               {value: 16, name: 'BII'}


             ],

             emphasis: {

               itemStyle: {

                 shadowBlur: 10,

                 shadowOffsetX: 0,

                 shadowColor: 'rgba(0, 0, 0, 0.5)'

               }

             }

           }

         ]

       })
     }
   }
 }
</script>

<style>
.my-charts{
  display: flex;
  justify-content: space-between;
}
  .my-charts div{

  }

</style>

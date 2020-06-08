<template>
 <div class="my-charts">
   <div class="first">
     <div id="bar-first" :style="{width:'600px',height:'400px'}"></div>
     <div id="pie-first" :style="{width:'600px',height:'400px'}"></div>
   </div>

   <div class="second">
       <div id="bar-second" :style="{width:'600px',height:'400px'}"></div>
       <div id="pie-second" :style="{width:'600px',height:'400px'}"></div>
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
     this.drawBarFirst();
     this.drawPieFirst();
     this.drawBarSecond();
     this.drawPieSecond();
   },
   methods:{
     drawBarFirst(){
       // 全球路由自治域排行-柱
        let myCharts1 = echarts1.init(document.getElementById('bar-first'))
        myCharts1.setOption( {
          title:{
            text: '全球IPv6路由宣告按自治域排行'
          },
          xAxis: {

            type: 'category',

            data: ['AS52842', 'AS11172', 'AS8376', 'AS28573', 'AS12479', 'AS16509', 'AS45609', 'AS22773', 'AS45271', 'AS13335', 'AS22394', 'AS54113', 'AS7552', 'AS3257', 'AS174', 'AS32098', 'AS5384', 'AS33363', 'AS133612', 'AS52300']

          },

          yAxis: {

            type: 'value'

          },

          series: [{

            data: [2365, 1552, 1462, 1425, 1325, 1162, 1059, 1007, 792, 728, 726, 713, 704, 701, 699, 691, 690, 663,606,578],

            type: 'bar'

          }]

        })
     },
     drawPieFirst(){
       // 饼-中国注册自治域
       let myCharts2 = echarts2.init(document.getElementById('pie-first'))
       myCharts2.setOption( {

         title: {

           text: '中国注册自治域按组织结构分布情况',

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

           data: ['中国电信', 'CERNET2', 'CERNET', '中国联通', '中国移动', '中联网盟', '阿里巴巴', '百度', '腾讯', '华为', '金山云']

         },

         series: [

           {

             name: '访问来源',

             type: 'pie',

             radius: '55%',

             center: ['50%', '60%'],

             data: [

               {value: 216, name: '中国电信'},

               {value: 47, name: 'CERNET2'},

               {value: 33, name: 'CERNET'},

               {value: 30, name: '中国联通'},
               {value: 24, name: '中国移动'},
               {value: 12, name: '中联网盟'},
               {value: 11, name: '阿里巴巴'},

               {value: 5, name: '百度'},

               {value: 4, name: '腾讯'},

               {value: 3, name: '华为'},

               {value: 1, name: '金山'},

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
     },
     drawBarSecond(){
       // 柱-国内路由排行
       let myCharts1 = echarts1.init(document.getElementById('bar-second'))
       myCharts1.setOption( {
         title:{
           text: '国内IPv6路由宣告按自治域排行',
         },
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
     drawPieSecond(){
       // 饼-中国路由自治域排行
       let myCharts2 = echarts2.init(document.getElementById('pie-second'))
       myCharts2.setOption({

         title: {

           text: '中国注册自治域按组织结构分布情况',

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

           data: ['中国电信', '中国联通', 'CERNET2', '中国移动', 'CERNET', '百度', '腾讯', '阿里巴巴', '华为', '金山云']

         },

         series: [

           {

             name: '访问来源',

             type: 'pie',

             radius: '55%',

             center: ['50%', '60%'],

             data: [

               {value: 54, name: '中国电信'},

               {value: 18, name: '中国联通'},

               {value: 17, name: 'CERNET2'},

               {value: 15, name: '中国移动'},
               {value: 7, name: 'CERNET'},
               {value: 2, name: '百度'},

               {value: 2, name: '腾讯'},

               {value: 2, name: '阿里巴巴'},

               {value: 1, name: '华为'},

               {value: 1, name: '金山'},

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
     },
   }
 }
</script>

<style>
.my-charts{
 /* display: flex;
  flex-wrap: wrap;*/
}
#pie-first,#pie-second{
  margin-top: 50px;
}
.first{
  display: flex;
  justify-content: space-between;
}
.second{
  display: flex;
  justify-content: space-between;
}


</style>

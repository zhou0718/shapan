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
    name:'serStatistics',
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
       // 代替换的图
      drawBarFirst(){
        // 柱-全球近十年IPv6地址分配
        let myCharts1 = echarts1.init(document.getElementById('bar-first'))
        myCharts1.setOption( {
          title: {
            text: '全球近十年IPv6地址分配情况',

          },
          xAxis: {

            type: 'category',

            data: ['2009', '2010', '2011', '2012', '2013', '2014', '20', '2015', '2016', '2017', '2018', '2019']

          },

          yAxis: {

            type: 'value'

          },

          series: [{

            data: [77081, 82396, 103094, 121216, 145172, 161950, 180850, 204947, 224106, 262337, 295352],

            type: 'bar'

          }]

        })
      },
      drawPieFirst(){
        // 饼-中国主要机构地址排行
        let myCharts2 = echarts2.init(document.getElementById('pie-first'))
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
      },
      drawBarSecond(){
        // 柱-中国近十年IPv6 排行
        let myCharts1 = echarts1.init(document.getElementById('bar-second'))
        myCharts1.setOption( {
          title:{
            text:"中国近十年IPv6地址分配情况"
          },
          xAxis: {

            type: 'category',

            data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

          },

          yAxis: {

            type: 'value'

          },

          series: [{

            data: [61, 399, 9396, 12530, 16665, 18789, 20576, 21168, 23411, 41058, 47825],

            type: 'bar'

          }]

        })
      },
      drawPieSecond(){
        // 饼-中国路由自治域排行
        let myCharts2 = echarts2.init(document.getElementById('pie-second'))
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

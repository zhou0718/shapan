<!--<template>
  <div class="order">
    <el-table
            :data="tableData"
            stripe
            class="table"
            border
            fit
            style="width: 100%"
            :header-cell-style="{'text-align':'left'}"
            >
    &lt;!&ndash;  <el-table-column
        type="index"
        label="id"
        width="50px"/>

      <el-table-column
              prop="userId"
              label="userId"
              width="100px"/>&ndash;&gt;

      <el-table-column
              prop="domainName"
              label="域名"
              />

      <el-table-column
              prop="ipList"
              label="ip地址"
              />

      <el-table-column
              prop="org"
              label="机构"
              />

      <el-table-column
              prop="descr"
              label="描述"
              />

     &lt;!&ndash; <el-table-column
              prop="isConfirm"
              label="isConfirm"
              :formatter="formatBoolean"
              width="100px"/>

      <el-table-column
              prop="isDeal"
              label="isDeal"
              :formatter="formatBoolean"
              width="100px"/>&ndash;&gt;

      <el-table-column
              label="状态"
              >
        <template slot-scope="scope">
          {{getStatus(scope.row.isConfirm,scope.row.isDeal)}}
        </template>
      </el-table-column>

      <el-table-column
              prop="time"
              label="时间"
              />

      <el-table-column
              label="操作"
              >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row,scope.$index)" type="text" size="medium">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    &lt;!&ndash;<div class="block" style="float: right;margin-right: 5%;margin-top: 3%">
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="10"
              layout="total,  prev, pager, next, jumper"
              :total="400">
      </el-pagination>
    </div>&ndash;&gt;
    &lt;!&ndash; <div><router-view/></div>&ndash;&gt;
  </div>
</template>

<script>
  import {requestOrderList, requestOrderDetail} from "../../network/requestOrder";
  export default {
    name: "index",
    data(){
      return{
        // tableData: [] ,
        tableData:[],
        currentPage: 1,
        isDeal: true,
        isConfirm: true,
        status: ''
      }
    },

    mounted() {
      requestOrderList().then(res => {
        this.tableData = res.data.data;
      })
    },

    methods:{
      getStatus(isConfirm,isDeal){
        if(!isConfirm){
          return "待处理"
        }else if(isConfirm && !isDeal){
          return "正在添加后台配置"
        }else
          return "代理成功"
      },
      formatBoolean (row, column, cellValue) {
        var ret = ''  //你想在页面展示的值
        if (cellValue) {
          ret = "是"  //根据自己的需求设定
        } else {
          ret = "否"
        }
        return ret;
      },


      handleClick(row,index){
        this.$router.push({path: '/order/detail',query:{orderId:(row.id)}})
        // console.log(index);
      },
      handleSizeChange(){  // 页码大小变化触发的事件

      },
      handleCurrentChange(){  //当前页面变动触发的事件

      }

    }
  }
</script>

<style scoped>
  .order{
    background: #fff;
  }



</style>-->

<!--<template>
  <div class="prev-tree">
    <div class="file-up-load">
      <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList"
              :auto-upload="false">
        <el-button size="small" type="primary">选择文件</el-button>
        <el-button size="small" type="primary" @click="submit">上传服务器</el-button>
      </el-upload>
    </div>

    <div class="echart-tree">
      <div id="myChart" class="mycharts" :style="{width:'1200px',height:'600px'}"></div>
    </div>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  /*require('echarts/lib/chart/line')
  require('echarts/lib/chart/bar')*/
  require('echarts/lib/chart/tree')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default {
    name: 'tree',
    data(){
      return{
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        chartData: {
          "name": "flare",
          "children": [
            {
              "name": "analytics",
              "children": [
                {
                  "name": "cluster",
                  "children": [
                    {"name": "AgglomerativeCluster", "value": 3938},
                    {"name": "CommunityStructure", "value": 3812},
                    {"name": "HierarchicalCluster", "value": 6714},
                    {"name": "MergeEdge", "value": 743}
                  ]
                },
                {
                  "name": "graph",
                  "children": [
                    {"name": "BetweennessCentrality", "value": 3534},
                    {"name": "LinkDistance", "value": 5731},
                    {"name": "MaxFlowMinCut", "value": 7840},
                    {"name": "ShortestPaths", "value": 5914},
                    {"name": "SpanningTree", "value": 3416}
                  ]
                },
                {
                  "name": "optimization",
                  "children": [
                    {"name": "AspectRatioBanker", "value": 7074}
                  ]
                }
              ]
            },
            {
              "name": "animate",
              "children": [
                {"name": "Easing", "value": 17010},
                {"name": "FunctionSequence", "value": 5842},
                {
                  "name": "interpolate",
                  "children": [
                    {"name": "ArrayInterpolator", "value": 1983},
                    {"name": "ColorInterpolator", "value": 2047},
                    {"name": "DateInterpolator", "value": 1375},
                    {"name": "Interpolator", "value": 8746},
                    {"name": "MatrixInterpolator", "value": 2202},
                    {"name": "NumberInterpolator", "value": 1382},
                    {"name": "ObjectInterpolator", "value": 1629},
                    {"name": "PointInterpolator", "value": 1675},
                    {"name": "RectangleInterpolator", "value": 2042}
                  ]
                },
                {"name": "ISchedulable", "value": 1041},
                {"name": "Parallel", "value": 5176},
                {"name": "Pause", "value": 449},
                {"name": "Scheduler", "value": 5593},
                {"name": "Sequence", "value": 5534},
                {"name": "Transition", "value": 9201},
                {"name": "Transitioner", "value": 19975},
                {"name": "TransitionEvent", "value": 1116},
                {"name": "Tween", "value": 6006}
              ]
            },
            {
              "name": "data",
              "children": [
                {
                  "name": "converters",
                  "children": [
                    {"name": "Converters", "value": 721},
                    {"name": "DelimitedTextConverter", "value": 4294},
                    {"name": "GraphMLConverter", "value": 9800},
                    {"name": "IDataConverter", "value": 1314},
                    {"name": "JSONConverter", "value": 2220}
                  ]
                },
                {"name": "DataField", "value": 1759},
                {"name": "DataSchema", "value": 2165},
                {"name": "DataSet", "value": 586},
                {"name": "DataSource", "value": 3331},
                {"name": "DataTable", "value": 772},
                {"name": "DataUtil", "value": 3322}
              ]
            },
            {
              "name": "display",
              "children": [
                {"name": "DirtySprite", "value": 8833},
                {"name": "LineSprite", "value": 1732},
                {"name": "RectSprite", "value": 3623},
                {"name": "TextSprite", "value": 10066}
              ]
            },
            {
              "name": "flex",
              "children": [
                {"name": "FlareVis", "value": 4116}
              ]
            },
            {
              "name": "physics",
              "children": [
                {"name": "DragForce", "value": 1082},
                {"name": "GravityForce", "value": 1336},
                {"name": "IForce", "value": 319},
                {"name": "NBodyForce", "value": 10498},
                {"name": "Particle", "value": 2822},
                {"name": "Simulation", "value": 9983},
                {"name": "Spring", "value": 2213},
                {"name": "SpringForce", "value": 1681}
              ]
            },
            {
              "name": "query",
              "children": [
                {"name": "AggregateExpression", "value": 1616},
                {"name": "And", "value": 1027},
                {"name": "Arithmetic", "value": 3891},
                {"name": "Average", "value": 891},
                {"name": "BinaryExpression", "value": 2893},
                {"name": "Comparison", "value": 5103},
                {"name": "CompositeExpression", "value": 3677},
                {"name": "Count", "value": 781},
                {"name": "DateUtil", "value": 4141},
                {"name": "Distinct", "value": 933},
                {"name": "Expression", "value": 5130},
                {"name": "ExpressionIterator", "value": 3617},
                {"name": "Fn", "value": 3240},
                {"name": "If", "value": 2732},
                {"name": "IsA", "value": 2039},
                {"name": "Literal", "value": 1214},
                {"name": "Match", "value": 3748},
                {"name": "Maximum", "value": 843},
                {
                  "name": "methods",
                  "children": [
                    {"name": "add", "value": 593},
                    {"name": "and", "value": 330},
                    {"name": "average", "value": 287},
                    {"name": "count", "value": 277},
                    {"name": "distinct", "value": 292},
                    {"name": "div", "value": 595},
                    {"name": "eq", "value": 594},
                    {"name": "fn", "value": 460},
                    {"name": "gt", "value": 603},
                    {"name": "gte", "value": 625},
                    {"name": "iff", "value": 748},
                    {"name": "isa", "value": 461},
                    {"name": "lt", "value": 597},
                    {"name": "lte", "value": 619},
                    {"name": "max", "value": 283},
                    {"name": "min", "value": 283},
                    {"name": "mod", "value": 591},
                    {"name": "mul", "value": 603},
                    {"name": "neq", "value": 599},
                    {"name": "not", "value": 386},
                    {"name": "or", "value": 323},
                    {"name": "orderby", "value": 307},
                    {"name": "range", "value": 772},
                    {"name": "select", "value": 296},
                    {"name": "stddev", "value": 363},
                    {"name": "sub", "value": 600},
                    {"name": "sum", "value": 280},
                    {"name": "update", "value": 307},
                    {"name": "variance", "value": 335},
                    {"name": "where", "value": 299},
                    {"name": "xor", "value": 354},
                    {"name": "-", "value": 264}
                  ]
                },
                {"name": "Minimum", "value": 843},
                {"name": "Not", "value": 1554},
                {"name": "Or", "value": 970},
                {"name": "Query", "value": 13896},
                {"name": "Range", "value": 1594},
                {"name": "StringUtil", "value": 4130},
                {"name": "Sum", "value": 791},
                {"name": "Variable", "value": 1124},
                {"name": "Variance", "value": 1876},
                {"name": "Xor", "value": 1101}
              ]
            },
            {
              "name": "scale",
              "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
              ]
            },
            {
              "name": "util",
              "children": [
                {"name": "Arrays", "value": 8258},
                {"name": "Colors", "value": 10001},
                {"name": "Dates", "value": 8217},
                {"name": "Displays", "value": 12555},
                {"name": "Filter", "value": 2324},
                {"name": "Geometry", "value": 10993},
                {
                  "name": "heap",
                  "children": [
                    {"name": "FibonacciHeap", "value": 9354},
                    {"name": "HeapNode", "value": 1233}
                  ]
                },
                {"name": "IEvaluable", "value": 335},
                {"name": "IPredicate", "value": 383},
                {"name": "IValueProxy", "value": 874},
                {
                  "name": "math",
                  "children": [
                    {"name": "DenseMatrix", "value": 3165},
                    {"name": "IMatrix", "value": 2815},
                    {"name": "SparseMatrix", "value": 3366}
                  ]
                },
                {"name": "Maths", "value": 17705},
                {"name": "Orientation", "value": 1486},
                {
                  "name": "palette",
                  "children": [
                    {"name": "ColorPalette", "value": 6367},
                    {"name": "Palette", "value": 1229},
                    {"name": "ShapePalette", "value": 2059},
                    {"name": "SizePalette", "value": 2291}
                  ]
                },
                {"name": "Property", "value": 5559},
                {"name": "Shapes", "value": 19118},
                {"name": "Sort", "value": 6887},
                {"name": "Stats", "value": 6557},
                {"name": "Strings", "value": 22026}
              ]
            },
            {
              "name": "vis",
              "children": [
                {
                  "name": "axis",
                  "children": [
                    {"name": "Axes", "value": 1302},
                    {"name": "Axis", "value": 24593},
                    {"name": "AxisGridLine", "value": 652},
                    {"name": "AxisLabel", "value": 636},
                    {"name": "CartesianAxes", "value": 6703}
                  ]
                },
                {
                  "name": "controls",
                  "children": [
                    {"name": "AnchorControl", "value": 2138},
                    {"name": "ClickControl", "value": 3824},
                    {"name": "Control", "value": 1353},
                    {"name": "ControlList", "value": 4665},
                    {"name": "DragControl", "value": 2649},
                    {"name": "ExpandControl", "value": 2832},
                    {"name": "HoverControl", "value": 4896},
                    {"name": "IControl", "value": 763},
                    {"name": "PanZoomControl", "value": 5222},
                    {"name": "SelectionControl", "value": 7862},
                    {"name": "TooltipControl", "value": 8435}
                  ]
                },
                {
                  "name": "data",
                  "children": [
                    {"name": "Data", "value": 20544},
                    {"name": "DataList", "value": 19788},
                    {"name": "DataSprite", "value": 10349},
                    {"name": "EdgeSprite", "value": 3301},
                    {"name": "NodeSprite", "value": 19382},
                    {
                      "name": "render",
                      "children": [
                        {"name": "ArrowType", "value": 698},
                        {"name": "EdgeRenderer", "value": 5569},
                        {"name": "IRenderer", "value": 353},
                        {"name": "ShapeRenderer", "value": 2247}
                      ]
                    },
                    {"name": "ScaleBinding", "value": 11275},
                    {"name": "Tree", "value": 7147},
                    {"name": "TreeBuilder", "value": 9930}
                  ]
                },
                {
                  "name": "events",
                  "children": [
                    {"name": "DataEvent", "value": 2313},
                    {"name": "SelectionEvent", "value": 1880},
                    {"name": "TooltipEvent", "value": 1701},
                    {"name": "VisualizationEvent", "value": 1117}
                  ]
                },
                {
                  "name": "legend",
                  "children": [
                    {"name": "Legend", "value": 20859},
                    {"name": "LegendItem", "value": 4614},
                    {"name": "LegendRange", "value": 10530}
                  ]
                },
                {
                  "name": "operator",
                  "children": [
                    {
                      "name": "distortion",
                      "children": [
                        {"name": "BifocalDistortion", "value": 4461},
                        {"name": "Distortion", "value": 6314},
                        {"name": "FisheyeDistortion", "value": 3444}
                      ]
                    },
                    {
                      "name": "encoder",
                      "children": [
                        {"name": "ColorEncoder", "value": 3179},
                        {"name": "Encoder", "value": 4060},
                        {"name": "PropertyEncoder", "value": 4138},
                        {"name": "ShapeEncoder", "value": 1690},
                        {"name": "SizeEncoder", "value": 1830}
                      ]
                    },
                    {
                      "name": "filter",
                      "children": [
                        {"name": "FisheyeTreeFilter", "value": 5219},
                        {"name": "GraphDistanceFilter", "value": 3165},
                        {"name": "VisibilityFilter", "value": 3509}
                      ]
                    },
                    {"name": "IOperator", "value": 1286},
                    {
                      "name": "label",
                      "children": [
                        {"name": "Labeler", "value": 9956},
                        {"name": "RadialLabeler", "value": 3899},
                        {"name": "StackedAreaLabeler", "value": 3202}
                      ]
                    },
                    {
                      "name": "layout",
                      "children": [
                        {"name": "AxisLayout", "value": 6725},
                        {"name": "BundledEdgeRouter", "value": 3727},
                        {"name": "CircleLayout", "value": 9317},
                        {"name": "CirclePackingLayout", "value": 12003},
                        {"name": "DendrogramLayout", "value": 4853},
                        {"name": "ForceDirectedLayout", "value": 8411},
                        {"name": "IcicleTreeLayout", "value": 4864},
                        {"name": "IndentedTreeLayout", "value": 3174},
                        {"name": "Layout", "value": 7881},
                        {"name": "NodeLinkTreeLayout", "value": 12870},
                        {"name": "PieLayout", "value": 2728},
                        {"name": "RadialTreeLayout", "value": 12348},
                        {"name": "RandomLayout", "value": 870},
                        {"name": "StackedAreaLayout", "value": 9121},
                        {"name": "TreeMapLayout", "value": 9191}
                      ]
                    },
                    {"name": "Operator", "value": 2490},
                    {"name": "OperatorList", "value": 5248},
                    {"name": "OperatorSequence", "value": 4190},
                    {"name": "OperatorSwitch", "value": 2581},
                    {"name": "SortOperator", "value": 2023}
                  ]
                },
                {"name": "Visualization", "value": 16540}
              ]
            }
          ]
        },
      }
    },
    mounted(){
      this.drawLine()
    },
    methods:{
      submit(){
        this.$refs.upload.submit()
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleExceed(file, fileList){
        return this.$message ('最多选择1个文件')
      },

      // 绘图
      drawLine(){
        let myChart = echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series:[
            {
              type: 'tree',

              data: [this.chartData],

              left: '2%',
              right: '2%',
              top: '8%',
              bottom: '20%',

              symbol: 'emptyCircle',

              orient: 'vertical',

              expandAndCollapse: true,

              label: {
                position: 'top',
                rotate: -90,
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9
              },

              leaves: {
                label: {
                  position: 'bottom',
                  rotate: -90,
                  verticalAlign: 'middle',
                  align: 'left'
                }
              },
              animationDurationUpdate: 750
            }
          ]
        });
      }
    }
  }
</script>

<style>
  .prev-tree{
    position: relative;
  }
  .file-up-load{
    position: relative;
    margin-left: 15px;
  }
  .el-upload-list__item-name{
    display: inline-block;
    width: 400px;
  }
  .el-upload-list{
    width: 400px;
    display: inline-block;
    position: absolute;
    left: 300px;
    top: -6px;
  }
  .echart-tree{
    margin: 60px 0 0 35px;

  }
</style>-->
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
              style="width: 95%">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "localExplore",
    data(){
      return{
        active:0,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
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
      }
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
</style>

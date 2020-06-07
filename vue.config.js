const path = require('path')

function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  lintOnSave: false,
  publicPath: './',
  chainWebpack: config => {
    // 替换路径
    /*config.resolve.alias
        .set("views", resolve("src/views"))
*/
    config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, {
          limit: 10240
        }));

    // 设置svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })

  },
  productionSourceMap: true, // 生产生成 sourceMap 文件
  devServer: {
   port: 8081,
    proxy: { // 代理
      "/api": {
        target: "http://119.23.29.212:8081", //访问的目标路径
        ws: true,
        changOrigin: true, //实现跨域
        pathRewrite: {
          '^/api': '' // 用/api代理target中的路径
        },
        // cookiePathRewrite: { // 是否携带cookie
        //      '/svc-prod-app': '/'
        // }
      },
    }
  },
}

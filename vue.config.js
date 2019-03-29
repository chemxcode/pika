const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        pathRewrite: {
          '^/api': '/mock/'
        },
        ws: true,
        changeOrigin: true
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  },
  // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
  },
}



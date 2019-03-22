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
  }
}


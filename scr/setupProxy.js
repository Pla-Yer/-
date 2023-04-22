const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api1',createProxyMiddleware({  //`api`是需要转发的请求 
        target: 'http://localhost:8080',  // 这里是接口服务器地址
        changeOrigin: true,        // 控制服务器收到的响应头中Host字段的值
        pathRewrite: {'^/api1': ''}
      }))
}

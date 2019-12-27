const proxy = require('http-proxy-middleware')

module.exports = app => {
  app.use(
	proxy('/api',{
      target: "",
	  secure:false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    }))
}
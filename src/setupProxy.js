const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://openapi.naver.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
  app.use(
    createProxyMiddleware('/proxy', {
      target: 'https://apis.data.go.kr/1160100/service',
      changeOrigin: true,
    }),
  );
};

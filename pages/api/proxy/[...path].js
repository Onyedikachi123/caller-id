import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createProxyMiddleware({
  target: 'https://enterprise.calleridrep.com/v1/me',
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '',
  },
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
});





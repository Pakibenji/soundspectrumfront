const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://all.api.radio-browser.info/json/servers", // Remplacez par l'URL réelle de votre API
      changeOrigin: true,
    })
  );
};

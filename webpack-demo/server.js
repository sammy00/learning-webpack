const Koa = require('koa');
const webpack = require('webpack');
//const webpackDevMiddleware = require('webpack-dev-middleware');
const middleware = require('koa-webpack-dev-middleware');

const app = new Koa();
//const config = require('./webpack.config.js');
//const compiler = webpack(config);
const config = webpack(require('./webpack.config.js'));

// Tell koa to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
//app.use(webpackDevMiddleware(compiler, {
//  publicPath: config.output.publicPath,
//}));
app.use(middleware({
  config: config,
}));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});
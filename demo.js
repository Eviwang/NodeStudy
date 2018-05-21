const Koa = require('koa');
const serveList = require('koa-serve-list');
const serveStatic = require('koa-serve-static');
const serve = require('koa-static')
const app = new Koa();

var path = '.';
var options = {

}

app.use(serve(path, options));
app.use(serveList(path, options));


app.listen(3000);

var koa = require("koa");
const app = new koa();


app.on('error',function(err){
    console.log('something error:',err)
})

// x-response-time
app.use(async (ctx,next)=>{
    const start = Date.now();
    await next();
    const time = Date.now() - start;
    ctx.set("x-response-time",`time:${time}ms`)
});

//log
app.use(async (ctx,next)=>{
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`)
});


app.use(async (ctx,next)=>{
    ctx.body = 'hello world!'
    ctx.cookies.set('name','tobi')

    console.log('accept html:', ctx.accepts('text/html'))
    console.log(ctx.ip);
    //ctx.app.on("test")
    console.log('query String:',ctx.querystring)
    console.log('query String Object:', ctx.query)
    console.log('fresh:',ctx.fresh)
    ctx.query = {
      name:'redirect'
    }
});


app.listen(3000);

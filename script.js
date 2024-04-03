const koa= require('koa');
const app= new koa();
app.use(async(ctx,next)=>{
     
    const start= Date.now();
    await next();
    const ms= Date.now()-start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    console.log('ms: %d',ms);

});

app.listen(8080);
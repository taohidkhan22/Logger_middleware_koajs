const koa= require('koa');
const app= new koa();
app.use(async(ctx,next)=>{
     
    const start= Date.now();
    ctx.body='hii';
    return next().then( ()=>{
      const ms= Date.now()-start;
     
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
   

});



try {
    app.listen(8085, ()=>{
        console.log("Ok, server is runing");
    });

  } catch (error) {
    console.error('server is not running :', error.message);
  }
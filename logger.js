const koa= require('koa');
const app=new koa();

app.use(async(ctx, next) =>{
    ctx.body="in port 8085 the server is runnign";
} );
app.listen(8085, ()=>{
    console.log('runnign app');
})
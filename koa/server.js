let Koa = require('koa');
let Router = require('koa-router');
let cors = require('koa-cors');
let fs = require('fs');
const app = new Koa();
const router = new Router();
router.get('/getJson',async ctx =>{
  await cors();
  ctx.body = JSON.parse(fs.readFileSync('./static/material.json'));
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);

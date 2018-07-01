import * as Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);

// console.log('Koa application is up and running on port 3000');

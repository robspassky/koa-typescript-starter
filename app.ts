import * as Koa from 'koa';

var app = new Koa();

app.use(function *(){
	this.body = 'hello world';
});

app.listen(3030);


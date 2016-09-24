var Koa = require('koa');

const APP = new Koa();

APP.use(function *(){ 
	this.body = 'Hello world';
});

APP.listen(3030);


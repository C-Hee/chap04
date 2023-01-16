require('dotenv').config();
const Koa = require('koa');
const Router = require('@koa/router');//라우터 - 웹서버의 라우터 세팅
const bodyParser=require('koa-bodyparser');
const app = new Koa();
const router= new Router();
const render=require('koa-ejs');
const path=require('path');



//환경 변수를 포트값으로 세팅, null이나 undefined 일 경우 3000으로 세팅
const port = process.env.PORT || 3000;

//바디파서 - http request의 바디를 parsing하여 활용할 수 있게 함
app.use(bodyParser({formLimit:'5mb'}));
//정적 파일 __dirname 현재 디렉토리의 public폴더를 static으로 설정
app.use(require('koa-static')(`${__dirname}/public`));

//라우터 설정
router.use(require('./src/routes').routes());
app.use(router.routes());
app.use(router.allowedMethods());

//EJS 템플릿엔진
render(app,{
    //layout:'null'
    layout: 'layouts/web',
    root: path.join(__dirname, '/views'),
    viewExt: 'ejs',cache:false,
});

//서버 실행
app.listen(port, () => {
    console.log(`웹서버 구동... ${port}`);
});

const Router = require('@koa/router');
const router = new Router();

const multer =require('@koa/multer');
const path = require('path');
const upload = multer({
    dest:path.resolve(__dirname, '../','storage')
});
const apiFileController = require('./api/file/controller')

const {myLogging}=require('./middleware/logging');
const {verify} = require('./middleware/auth');

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedController = require('./api/feed/controller');
const koaEjs = require('koa-ejs');

router.use(myLogging);

router.post('/file/upload', upload.single('file'), apiFileController.upload);
router.get('/file/:id', apiFileController.download);


router.get('/',webController.home);
router.get('/page/:page',webController.page);

router.post('/api/user/register', apiUserController.register);
router.post('/api/user/login', apiUserController.login);

router.use(verify);
router.get('/api/user/:id', apiUserController.info);


router.get('/api/feed', apiFeedController.index);
router.post('/api/feed',apiFeedController.store);
router.get('/api/feed/:id',apiFeedController.show);
router.put('/api/feed/:id',apiFeedController.update);
router.delete('/api/feed/:id',apiFeedController.delete);

module.exports=router;
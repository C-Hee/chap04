const jwt = require('jsonwebtoken');
const { register,login } = require('./query');
const crypto = require('crypto');

/**해당 id의 회원정보들*/
exports.info = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`;
}
/**회원가입 처리*/
exports.register = async (ctx, next) => {
    //pbkdf2Sync(word, salt, 반복힛수, 글자수, 암호화 방식);
    let { email, password, name } = ctx.request.body;
    let result = await crypto.pbkdf2Sync(password, process.env.APP_KEY,50, 50, 'sha512');

    let { affectedRows } = await register(email, result.toString('base64'), name);
    if (affectedRows > 0) {

        let token = await generateToken({ name });
        ctx.body = token;

    } else {
        ctx.body = { result: "fail" };
    }

}
/** 로그인 모듈 */
exports.login = async (ctx, next) => {

    //let id = ctx.request.body.id;
    //let pw = ctx.request.body.pw;

    let { email, password } = ctx.request.body;
    let result = await crypto.pbkdf2Sync(password, process.env.APP_KEY,50, 50, 'sha512');

    let item = await login(email,result.toString('base64'));

    if (item ==null) {
        ctx.body = { result: "result null fail" };
    } else {
        let token = await generateToken({ name:item.name });
        ctx.body = token;
    }
}

/**
 * jwt 토큰 생성
 * @param {object} payload 추가적으로 저장할 payload
 * @returns {string} jwt 토큰 string
 * jwt에서 콜백을 위해 promise로 감쌈
  */
let generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.APP_KEY, (error, token) => {
            // if(error){
            //     reject(error);
            // }
            // resolve(token);}
            //삼항연산자 style
            (error) ? reject(error) : resolve(token);
        })

    })
}
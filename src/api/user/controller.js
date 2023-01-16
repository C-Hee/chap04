const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

//해당 id의 회원정보들
exports.info = (ctx, next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`;
}

exports.register = async (ctx, next) => {
    //회원가입 처리 모듈

    let token = await generateToken({ name: 'my-name' });
    ctx.body = token;
}

exports.login = async (ctx, next) => {
    //로그인 모듈
    //let id = ctx.request.body.id;
    //let pw = ctx.request.body.pw;

    let { id, pw } = ctx.request.body;
    let result = "";
    if (id === 'admin' && pw === '1234') {
        result = await generateToken({ name: 'abc' });
    }
    else {
        result = "id 또는 pw가 올바르지 않습ㄴ디ㅏ";
    }
    ctx.body = result;
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
            (error) ? reject(error) : resolve(token);
        })

    })
}
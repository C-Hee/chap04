const jwt = require('jsonwebtoken');
//생성 예제
const token = jwt.sign(
    {name:'tu'},
    'my-secret-key',
    {expiresIn: '1m'},
    (err,token)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(token);
    }
);

//검증 예제
jwt.verify(token, 'my-secret-key',(error,decoded)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log(decoded);
});
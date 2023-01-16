/**사이트 소개 홈페이지 영역 */
exports.home = (ctx,next)=>{
    console.log(`홈페이지 호출`);
    ctx.body = `홈페이지`;
}
/** 약관 등 정보성 페이지 영역 */
exports.page=(ctx,next)=>{
    let page = ctx.params.page;//아래와 같음
//  let {page}=ctx.params; //위와 같음(오브젝트를 가져와서 page파라미터사용)

    let content;
    switch(page){
        case 'terms':
            content = "이용약관";
            break;
        case 'policy':
            content = "개인정보 처리방침";
            break;
    }
    ctx.body = content;
}
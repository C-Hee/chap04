/**사이트 소개 홈페이지 영역 */
exports.home = (ctx,next)=>{
    console.log(`홈페이지 호출`);
    ctx.body = `홈페이지`;
}
/** 약관 등 정보성 페이지 영역 */
exports.page= async (ctx,next)=>{
    let page = ctx.params.page;//아래와 같음
//  let {page}=ctx.params; //위와 같음(오브젝트를 가져와서 page파라미터사용)

    let pagename="";
    switch(page){
        case 'terms':
            pagename = "이용약관";
            break;
        case 'policy':
            pagename = "개인정보 처리방침";
            break;
        default:
            pagename = "오류!!";
            break;
    }

    //ejs index파일을 가져옴 - 파일을 가져오는데 걸리는 시간 고려 aysnc-await
    await ctx.render('index',{pagename:pagename}); //변수 pagename(2)을 index pagename(1)이름으로 보냄
    //await ctx.render('index',{pagename}); //상동
}
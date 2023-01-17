exports.index = (ctx, next) =>{
    //ctx.body = `피드 리스트`;
    ctx.body=ctx.query;//쿼리를 그대로 body의 내용으로 보냄
    /**
     * get방식 쿼리 값을 가져오는 방법
     * let query =ctx.query;
     * query.color
     * query.size
     * query.count
     * (브라우저에서 ?color=red&size=XL&count2 입력)
     */
    let result = isNewFeed('2023-01-12');
}

exports.store = (ctx, next) => {
    let body = ctx.request.body;//브라우저에서 보낸 body를
    ctx.body = body;//웹페이지 body로 내보냄 하지만!! body를 parsing해야 사용할 수 있음> index에서 설정
}
/**피드 상세보기*/
exports.show = (ctx,next)=>{
    let id= ctx.params.id;
    ctx.body=`${id} 피드 상세`
}
/** 피드 업데이트 */
exports.update = (ctx, next)=>{
    let id =ctx.params.id;
    ctx.body = `${id} 피드 수정`;
}
/** 피드 삭제 */
exports.delete = (ctx, next)=>{
    let id =ctx.params.id;
    ctx.body = `${id} 피드 삭제`;
}
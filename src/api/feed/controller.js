const {  storeFeed, showFeed, updateFeed, deleteFeed } = require('./query');
const verify = require('../../middleware/auth'); 

exports.index = (ctx, next) =>{
    //ctx.body = `피드 리스트`;
    ctx.body=ctx.query;//쿼리를 그대로 body의 내용으로 보냄
    /**
     * get방식 쿼리 값을 가져오는 방법
     * let query =ctx.query;
     * query.color
     * query.size
     * query.count
     * (브라우저에서 ?color=red&size=XL&count2 입력한 경우)
     */
    let result = isNewFeed('2023-01-12');
}
 /**피드 등록 */
exports.store = async (ctx, next) => {
    let { userId, fileId, content } = ctx.request.body;
    
    let result = await storeFeed(userId,fileId,content);

    ctx.body = {result:result};
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
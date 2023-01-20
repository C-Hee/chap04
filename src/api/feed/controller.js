const { info,store, show, update} = require('./query');
const verify = require('../../middleware/auth'); 

/** 피드 리스트 출력 */
exports.index = async(ctx, next) =>{
    ctx.body = await info();
}
 /**피드 등록 */
exports.store = async (ctx, next) => {
    let { userId, fileId, content } = ctx.request.body;
    
    let {affectedRows,insertId} = await store(userId,fileId,content);
    
    if (affectedRows > 0) {
        ctx.body = {
            result: "ok",
            id: insertId
        }
    } else {
        ctx.body = {
            result: "fail"
        }
    }
}

/**피드 상세보기*/
exports.show = async (ctx,next)=>{
    let id = ctx.params.id;
    let result = await show(id); 
    if (result ==null) {
        ctx.body = { result: "result null fail" };
    } else {
        ctx.body = result;
    }
}
/** 피드 업데이트 */
exports.update = async(ctx, next)=>{
    let {id, userId,fileId,content} =ctx.request.body
    let {affectedRows,insertId} = await update(id,userId,fileId,content);
    if (affectedRows > 0) {
        ctx.body = {
            result: `feed ${insertId}update ok`
        }
    } else {
        ctx.body = {
            result: `feed update fail`
        }
    }
}
/** 피드 삭제 */
exports.delete = async(ctx, next)=>{
    let id =ctx.params.id;
    ctx.body = `${id} 피드 삭제`;
}
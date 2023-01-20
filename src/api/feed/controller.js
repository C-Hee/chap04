const feed = require('./query');
const verify = require('../../middleware/auth');


/** 피드 리스트 출력 */
exports.index = async (ctx, next) => {
    ctx.body = await feed.info();
}
/**피드 등록 */
exports.store = async (ctx, next) => {
    let { userId, fileId, content } = ctx.request.body;

    let { affectedRows, insertId } = await feed.store(userId, fileId, content);

    if (affectedRows > 0) {
        ctx.body = {
            result: "store ok",
            id: insertId
        }
    } else {
        ctx.body = {
            result: "store fail"
        }
    }
}

/**피드 상세보기*/
exports.show = async (ctx, next) => {
    let id = ctx.params.id;
    let result = await feed.show(id);
    if (result == null) {
        ctx.body = { result: "show result null fail" };
    } else {
        ctx.body = result;
    }
}
/** 피드 업데이트 */
exports.update = async (ctx, next) => {
    let { userId, fileId, content } = ctx.request.body
    let id = ctx.params.id;
    let { affectedRows } = await feed.update(id, userId, fileId, content);
    if (affectedRows > 0) {
        ctx.body = {
            result: `update ok`
        }
    } else {
        ctx.body = {
            result: `update fail`
        }
    }
}
/** 피드 삭제 */
exports.delete = async (ctx, next) => {
    let { userId } = ctx.request.body;
    let id = ctx.params.id;
    let { affectedRows } = await feed.delete (id, userId);
    if (affectedRows > 0) {
        ctx.body = {
            result: `delete ok`
        }
    } else {
        ctx.body = {
            result: `delete fail`
        }
    }

}
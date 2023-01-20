const { pool } = require('../../data');

/**
* 피드 id 리스트를 출력하는 함수
*/
exports.info = async()=>{
    const query = `SELECT id FROM feed`;
    let result = await pool(query);
    return (result.length< 0)?null: result;
    
}

/**
* 데이터베이스에 피드를 등록하는 함수
* @param {string} userId 사용자id
* @param {string} fileId 파일id
* @param {string} content 피드 내용
* @returns
*/
exports.store = async(userId,fileId,content)=>{
    const query = `INSERT INTO feed
    (user_id, image_id, content)
    VALUES (?,?,?)`;
    return await pool(query,[userId,fileId,content]);
    
}

/**
* 데이터베이스의 피드를 조회하는 함수
* @param {string} feedId 피드id
* @returns
*/
exports.show = async (feedId) => {
    const query = `SELECT * FROM feed WHERE
    id = ?`;
    let result = await pool(query, [feedId]);
    return (result.length< 0) ? null : result;
}


/**
* 데이터베이스의 피드를 업데이트하는 함수
* @param {string} userId 피드id
* @param {string} userId 사용자id
* @param {string} fileId 파일id
* @param {string} content 피드 내용
* @returns
*/
exports.update = async(id,fileId,userId,content)=>{
    const query = `UPDATE feed
        SET user_id = ?,
            image_id = ?,
            content = ?
        WHERE id = ?;
        `;
    return await pool(query,[userId,fileId,content,id]);
}

/**
* 데이터베이스의 피드를 삭제하는 함수
* @param {string} userId 사용자id
* @param {string} fileId 파일id
* @param {string} content 피드 내용
* @returns
*/
exports.delete = async()=>{return}
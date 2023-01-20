const { pool } = require('../../data');


/**
* 데이터베이스에 피드를 등록하는 함수
* @param {string} userId 사용자id
* @param {string} fileId 파일id
* @param {string} content 피드 내용
* @returns
*/
exports.storeFeed = async(userId,fileId,content)=>{
    const query = `INSERT INTO feed
    (user_id, image_id, content)
    VALUES (?,?,?)`;
    let {affectedRows} = await pool(query,[userId,fileId,content]);
    return affectedRows>0?"Success":"fail" 
}

/**
* 데이터베이스의 피드를 조회하는 함수
* @param {string} userId 사용자id
* @returns
*/
exports.showFeed = async (userId) => {
    const query = `SELECT * FROM feed WHERE
    user_id = ?`;
    let result = await pool(query, [userId]);
    return (result.length < 0) ? null : result;
}


/**
* 데이터베이스의 피드를 업데이트하는 함수
* @param {string} userId 사용자id
* @param {string} fileId 파일id
* @param {string} content 피드 내용
* @returns
*/
exports.updateFeed = async()=>{return}

/**
* 데이터베이스의 피드를 삭제하는 함수
* @param {string} userId 사용자id
* @param {string} fileId 파일id
* @param {string} content 피드 내용
* @returns
*/
exports.deleteFeed = async()=>{return}
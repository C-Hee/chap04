require('dotenv').config();
const mysql = require('mysql2');

exports.connection = mysql.createPool(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

//함수를 rapping해서 사용, 장점: 유연성 향상(다른 함수 사용 등)
exports.pool = (queryString, params) => {
    return new Promise((resolve, reject) => {
        this.connection.query(queryString, params, (err, rows, fields) => {
            (err) ? reject(err) : resolve(rows);
        });
    })
}
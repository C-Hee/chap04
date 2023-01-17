// get the client
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 database: 'test'
});
// simple query
connection.query(
 'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
 function(err, results, fields) {
 console.log(results); // results contains rows returned by server
 console.log(fields); // fields contains extra meta data about results, if available
 }
);
// with placeholder
// 간단하고 안전한 구조 그러나 jsp에서는 잘 동작하지않음

connection.query(
 'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
 ['Page', 45],
 function(err, results) {
 console.log(results);
 }
);
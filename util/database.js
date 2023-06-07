const mySql = require('mysql2');

const pool = mySql.createPool({
    host:'localhost',
    user:'root',
    database:'node-completed',
    password:'2804As@123'
})

module.exports = pool.promise();
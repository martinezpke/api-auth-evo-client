const pool = require('../db/connection'); 

console.log(pool.query("select users *"))
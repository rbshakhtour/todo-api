const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "20611186",
    host: "localhost",
    port: 5000, 
    database: "todo"
});


module.exports = pool; 
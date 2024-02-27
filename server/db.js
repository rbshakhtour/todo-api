const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "20611186",
    host: "localhost",
    port: 3000, 
    database: "todo"
});


module.exports = pool; 
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "20611186",
    host: "127.0.0.1",
    port: 5432, 
    database: "perntodo"
});

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS todo (
        todo_id SERIAL PRIMARY KEY,
        description VARCHAR(255)
    )
`;

pool.query(createTableQuery, (err, res) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table created successfully');
        // Start your Node.js application here
    }
});

module.exports = pool; 
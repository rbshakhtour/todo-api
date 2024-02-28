const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "20611186",
    host: "127.0.0.1",
    port: 5432, 
    database: "perntodo"
});

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS todo_lists (
        list_id SERIAL PRIMARY KEY,
        list_name VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS todos (
        todo_id SERIAL PRIMARY KEY,
        list_id INT REFERENCES todo_lists(list_id) ON DELETE CASCADE,
        description VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT FALSE
    );
`;

pool.query(createTableQuery, (err, res) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table created successfully');
    }
});

module.exports = pool; 
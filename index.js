const express = require('express');
const app = express();
const PORT = 3000;
const pool = require("./db");
const cors = require("cors");
// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// all the routes 
app.use('/api', require('./routes/list'));
app.use('/api', require('./routes/item'));

// starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

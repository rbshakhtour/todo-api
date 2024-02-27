const express = require('express');
const app = express();
const PORT = 3000;
const pool = require("./db");
const cors = require("cors");
// Middleware
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

// all the routes 
// app.use('/api', require('./routes/list'));
// app.use('/api', require('./routes/item'));



//create a todo
app.post("/todos", async (req,res) => {
  try{
    console.log(req,res);
  } catch(err){
    console.error(err.message);
  }
})

// starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
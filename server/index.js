const express = require('express');
const app = express();
const PORT = 5000;
const pool = require("./db");
const cors = require("cors");
// Middleware
app.use(express.json());
app.use(cors());


//create a todo
app.post("/todos", async (req,res) => {
  try{
    console.log(req.body);
  } catch(err){
    console.error(err.message);
  }
})

// starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
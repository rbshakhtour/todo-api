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
    const {description} = req.body; 
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description]);
    res.json(newTodo.rows[0]);
  } catch(err){
    console.error(err.message);
  }
});

app.get("/todos", async(req,res) =>{
  try{
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch(err) {
    console.error(err.message);
  }
});

app.get("/todos/:id", async(req,res) =>{
  try{
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]); 
    res.json(todo.rows[0]);
  } catch(err) {
    console.error(err.message);
  }
});

// starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
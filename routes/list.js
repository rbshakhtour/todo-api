const express = require('express');
const router = express.Router();
const { TodoList } = require('../models');

// make a todo list 
router.post('/lists', async (req, res) => {
  try {
    const todoList = await TodoList.create(req.body);
    res.status(201).json(todoList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get all the todolist 
router.get('/lists', async (req, res) => {
  try {
    const todoLists = await TodoList.findAll();
    res.json(todoLists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// delete a todo - list 
router.delete('/lists/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todoList = await TodoList.findByPk(id);
    if (!todoList) {
      return res.status(404).json({ message: 'TodoList not found' });
    }
    await todoList.destroy();
    res.json({ message: 'TodoList deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

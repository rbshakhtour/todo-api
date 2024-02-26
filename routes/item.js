const express = require('express');
const router = express.Router();
const { TodoItem } = require('../models');

// create an item for a specific list
router.post('/lists/:listId/items', async (req, res) => {
  const { listId } = req.params;
  try {
    const todoItem = await TodoItem.create({ ...req.body, todoListId: listId });
    res.status(201).json(todoItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get all items from the list
router.get('/lists/:listId/items', async (req, res) => {
  const { listId } = req.params;
  try {
    const todoItems = await TodoItem.findAll({ where: { todoListId: listId } });
    res.json(todoItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// update the item as done
router.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todoItem = await TodoItem.findByPk(id);
    if (!todoItem) {
      return res.status(404).json({ message: 'TodoItem not found' });
    }
    await todoItem.update({ is_completed: true });
    res.json(todoItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// delete an item off the todolist
router.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todoItem = await TodoItem.findByPk(id);
    if (!todoItem) {
      return res.status(404).json({ message: 'TodoItem not found' });
    }
    await todoItem.destroy();
    res.json({ message: 'TodoItem deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

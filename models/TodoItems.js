// models/TodoItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Assuming you have a db.js file for Sequelize initialization

const TodoItem = sequelize.define('TodoItem', {
  // Define your model attributes here
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false // Default value is false, indicating the item is not completed
  }
});

module.exports = TodoItem;

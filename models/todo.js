'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define(`todo_list`, {
    priority: DataTypes.STRING,
    todo_task: DataTypes.STRING,
    completed: DataTypes.ENUM('true', 'false'),
    due_date: DataTypes.DATE
  }, {});
  todo.associate = function (models) {
    // associations can be defined here
  };
  return todo;
};
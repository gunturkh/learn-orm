'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define(`todo_list`, {
    priority_id: DataTypes.INTEGER,
    todo_task: DataTypes.STRING,
    created_date: DataTypes.DATE,
    due_date: DataTypes.DATE
  }, {});
  todo.associate = function(models) {
    // associations can be defined here
  };
  return todo;
};
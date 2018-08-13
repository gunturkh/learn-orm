'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const demoTodo = [{
        priority: 'low',
        todo_task: 'Learn Sequelize',
        completed: 'false',
        due_date: new Date(),
        createdAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        priority: 'medium',
        todo_task: 'Review Sequelize',
        completed: 'false',
        due_date: new Date(),
        createdAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        priority: 'high',
        todo_task: 'Learn ORM',
        completed: 'false',
        due_date: new Date(),
        createdAt: new Date(),
        UpdatedAt: new Date()
      }
    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('todo_lists', null, {});
  }
};
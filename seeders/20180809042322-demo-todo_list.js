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
      priority_id: '1',
      todo_task: 'Learn Sequelize',
      created_date: new Date(),
      due_date: new Date()
    },
    {
      priority_id: '2',
      todo_task: 'Review Sequelize',
      created_date: new Date(),
      due_date: new Date(),

    },
    {
      priority_id: '3',
      todo_task: 'Learn ORM',
      created_date: new Date(),
      due_date: new Date()
    }]
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

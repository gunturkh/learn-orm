'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    const demoTodo = [{
      priority_id: '1',
      todo_task: 'Learn MariaDB',
      created_date: new Date(),
      due_date: new Date()
    },
    {
      priority_id: '2',
      todo_task: 'Review API',
      created_date: new Date(),
      due_date: new Date(),
      
    },
    {
      priority_id: '3',
      todo_task: 'Review HTML & CSS',
      created_date: new Date(),
      due_date: new Date()
    }
  ]

    return queryInterface.bulkInsert('todo_list', demoTodo, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete('Users', null, {});
  }
};
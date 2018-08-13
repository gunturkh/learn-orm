'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    const demoTodo = [{
        username: 'guntur',
        email: 'guntur@gmail.com',
        createdAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        username: 'maya',
        email: 'maya@gmail.com',
        createdAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        username: 'alif',
        email: 'alif@gmail.com',
        createdAt: new Date(),
        UpdatedAt: new Date()
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
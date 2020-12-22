'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        password: bcrypt.hashSync('123123', 10),
        gender: 'male',
      },
      {
        firstName: 'Sam',
        lastName: 'Smith',
        email: 'sam@mail.com',
        password: bcrypt.hashSync('123123', 10),
        gender: 'male',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@mail.com',
        password: bcrypt.hashSync('123123', 10),
        gender: 'female',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

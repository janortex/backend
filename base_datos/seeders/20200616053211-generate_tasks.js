'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */
      return queryInterface.bulkInsert('tasks', [
        {id: 1,descrption: 'Grabar el curso de backend', createdAt: new Date(), updatedAt: new Date()},
        {id: 2,descrption: 'Editar los videos del curso de backend', createdAt: new Date(), updatedAt: new Date()},
        {id: 3,descrption: 'Subir los videos', createdAt: new Date(), updatedAt: new Date()}
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('tasks', null, {});

  }
};

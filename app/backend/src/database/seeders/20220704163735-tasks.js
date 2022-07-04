module.exports = {
  up: async (queryInterface) => {

    await queryInterface.bulkInsert('tasks', [
      {
        task: 'Atualizar relatório',
        deadline: 2,
      },
      {
        task: 'Mapear possíveis investidores',
        deadline: 5, 
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
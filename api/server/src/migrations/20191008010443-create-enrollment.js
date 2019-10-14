module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      policy_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      member_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hospital_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hmo_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enrollments');
  }
};
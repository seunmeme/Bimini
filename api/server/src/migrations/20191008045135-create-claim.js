module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Claims', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      claim_id: {
        type: Sequelize.STRING,
        allowNull: false,
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
      claim: {
        type: Sequelize.JSONB,
        allowNull: false,
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
    return queryInterface.dropTable('Claims');
  }
};

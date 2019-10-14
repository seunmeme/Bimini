module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Auths', {
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
      diagnosis: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      narration: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      items: {
        type: Sequelize.JSONB,
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
  down: (queryInterface) => {
    return queryInterface.dropTable('Auths');
  }
};
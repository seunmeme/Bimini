module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define('Auth', {
    claim_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    policy_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    member_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hospital_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hmo_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diagnosis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    narration: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    items: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
   },
  );
  

  return Auth;
};


module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
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
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  );
 
  return Enrollment;
};
module.exports = (sequelize, DataTypes) => {
  const Claim = sequelize.define('Claim', {
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
    claim: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  );
 
  return Claim;
}

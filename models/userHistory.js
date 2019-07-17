module.exports = (function (sequelize, DataTypes) {
    var userHistory = sequelize.define('userHistory', {

      exerciseType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      exerciseIntensity: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }, {
        freezeTableName: true
    })
    return userHistory;
  });
module.exports = (function (sequelize, DataTypes) {
    var userHistory = sequelize.define('userHistory', {

      excerciseType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      excerciseIntesity: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }, {
        freezeTableName: true
    })
    return userHistory;
  });
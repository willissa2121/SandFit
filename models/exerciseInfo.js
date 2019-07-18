module.exports = (function (sequelize, DataTypes) {
    var exerciseInfo = sequelize.define('exerciseInfo', {
      exercise_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      level: {
        type: DataTypes.STRING,
        allowNull: false
      },
      muscle_group: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link : {
        type: DataTypes.STRING,
        allowNull: true
      },
      imageLink : {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
        freezeTableName: true
    })
    return exerciseInfo;
  });
 
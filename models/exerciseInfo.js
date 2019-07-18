module.exports = (function (sequelize, DataTypes) {
    var exerciseInfo = sequelize.define('exerciseInfo', {
      exercise_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
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
      image_link : {
        type: DataTypes.STRING,
        allowNull: true
      },
      video_image: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
        freezeTableName: true
    })
    return exerciseInfo;
  });
 
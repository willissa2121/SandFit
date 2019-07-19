module.exports = (function (sequelize, DataTypes) {
    var userDiet = sequelize.define("diets", {
        userId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
          type: DataTypes.STRING
        },
        nutrients: {
          type: DataTypes.STRING,
          allowNull: true
        },
        type: {
          type: DataTypes.STRING,
          allowNull: true
        },
        food: {
          type: DataTypes.STRING,
          allowNull: true
        }
    });
    return userDiet;
});
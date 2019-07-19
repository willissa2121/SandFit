module.exports = (function (sequelize, DataTypes) {
    var userDiet = sequelize.define("Diets", {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        date: {
          type: DataTypes.STRING
        },
        breakfast: {
          type: DataTypes.STRING,
          allowNull: true
        },
        lunch: {
          type: DataTypes.STRING,
          allowNull: true
        },
        dinner: {
          type: DataTypes.STRING,
          allowNull: true
        }
    });
    return userDiet;
});
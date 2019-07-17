module.exports = (function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weightGoal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userBorn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    userBornToday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
<<<<<<< HEAD
    }, 
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
=======
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true
>>>>>>> 8f2dc888e24e4be4574dcbb4b0d49b04157a6651
    }
  })
  return users;
});

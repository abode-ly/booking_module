module.exports = (sequelize, type) => sequelize.define('guest', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: type.STRING,
    allowNull: false,
  },
});

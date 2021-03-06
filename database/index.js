require('dotenv').config();
const Sequelize = require('sequelize');
const localPassword = require('./config/example.config');

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_ROOT_PASSWORD,
} = process.env;

const host = MYSQL_HOST || '172.17.0.2';
const user = MYSQL_USER || 'root';
const databaseName = MYSQL_DATABASE || 'bookings';

const db = new Sequelize(databaseName, user, MYSQL_ROOT_PASSWORD || localPassword, {
  host,
  dialect: 'mysql',
  logging: false,
});


module.exports = db;

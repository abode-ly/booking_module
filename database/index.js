const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
const pw = process.env.MYSQL_ROOT_PASSWORD || require('./config/sequelize.config').rootPW;

const databaseName = process.env.MYSQL_DATABASE || 'bookings';

mysql.createConnection({
  host: process.env.MYSQL_HOST || '172.17.0.2',
  port: process.env.MYSQL_PORT || '3306',
  user: process.env.MYSQL_USER || 'root',
  password: pw || 'root',
})
  .then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName};`).then(() => {
      console.info('Database create or successfully checked');
      connection.end();
    });
});

const db = new Sequelize(databaseName, 'root', pw, {
  host: process.env.MYSQL_URL || '172.17.0.2',
  dialect: 'mysql',
  logging: false,
});

// db.query(`CREATE DATABASE IF NOT EXISTS ${databaseName};`).then(() => console.info('Database created'));

module.exports = db;

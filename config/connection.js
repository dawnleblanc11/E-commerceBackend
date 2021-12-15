require('dotenv').config();
// import the Sequilize constructor from the library
const Sequelize = require('sequelize');
// create connection to the database
let sequelize;

if (process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3001,
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  }

module.exports = sequelize;

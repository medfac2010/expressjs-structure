const { Sequelize } = require('sequelize');
const dbConfig = require('../configs/db.config');

let sequelize = null;

function initializeConnection() {
  sequelize = new new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.driver
    })
}

function getConnection() {
  this.initializeConnection()
  return sequelize;
}

async function ConnectTest(con){
  con.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

}

module.exports = { initializeConnection, getConnection, ConnectTest };

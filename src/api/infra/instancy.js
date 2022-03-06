const Sequelize = require('sequelize');
const config = require('../config/default.json');

const instancy = new Sequelize(
    config.mysql.database,
    config.mysql.user,
    config.mysql.password,
    {
        host:config.mysql.host  ,
        dialect: 'mysql'
    }    
);

module.exports = instancy;
const {Sequelize,DataTypes} = require('sequelize');

require('dotenv').config();


const sequelize = new Sequelize('node-complete','root','',{
    dialect: process.env.dialect,
})

module.exports = sequelize,DataTypes;
const {DataTypes}  = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
  }, 
   ph:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
   },
   email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
   }

})

module.exports = User;
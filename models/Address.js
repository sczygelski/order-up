 const { Model, DataTypes } = require('sequelize');
 const sequelize = require('../config/connection');
 
 
 // create our Address Model
 class Address extends Model { }
 
 // Creating fileds/columns for Address model
 Address.init(
     {
 
         // ID of the address
         id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true
         },
         // Full Street address including numbers
         address_text: {
             type: DataTypes.STRING,
             allowNull: false,
         },
         user_id: {
             type: DataTypes.INTEGER,
           },
         review_id: {
             type: DataTypes.STRING,
             allowNull: false,
         }
     },
 
     {
         sequelize,
         freezeTableName: true,
         underscored: true,
         modelName: "address",
     }
 );
 
 module.exports = Address;
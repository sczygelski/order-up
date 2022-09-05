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
        // House number
        houseNumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // Street address
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // City
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // State
        state: {
            type: DataTypes.STRING,
            allowNull: false
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
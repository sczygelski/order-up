const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create ourieview model
class Review extends Model {}
// Creating fields/columns for Review model

Review.init(
    {
        // ID of the address
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        postedBy: {
            type: DataTypes.STRING,
        },

        content: {
            type: DataTypes.STRING,
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
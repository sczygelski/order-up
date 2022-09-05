const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        //ID of review
        id: {
            type: DataTypes.INTEGER,
            allowNul: false,
            primaryKey: true,
            autoIncrement: true
        },
        //rating by stars
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        reviewbody: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "review"
    }
)
module.exports = Review;

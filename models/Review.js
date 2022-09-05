const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        //ID of review
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //rating by stars
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'address',
                key: 'street'
            }
        },
        reviewbody: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        excerpt: {
            type: DataTypes.STRING(20), 
            allowNull: true,
            references: {
                model: 'review',
                key: 'reviewbody'
            }        
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

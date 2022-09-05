const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

<<<<<<< HEAD

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
=======
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
>>>>>>> 3350475e28336288152c6c4337cc32ea8b07e685
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
<<<<<<< HEAD
        modelName: "address",
    }
);

module.exports = Address;
=======
        modelName: "review"
    }
)
module.exports = Review;
>>>>>>> 3350475e28336288152c6c4337cc32ea8b07e685

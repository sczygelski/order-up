//Requirements 
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Stars extends Model {}

//Define the table
Stars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    },
    review_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "review",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "stars"
  }
);

module.exports = Stars;
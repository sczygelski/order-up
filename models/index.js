const User = require("./User");

const Review = require("./Review");


//associations
User.hasMany(Review, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL"
});

module.exports = { User, Review, };

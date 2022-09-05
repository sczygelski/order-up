const User = require("./User");
const Address = require("./Address");
const Review = require("./Review");

//associations
User.hasMany(Address, {
  foreignKey: "user.username",
  onDelete: "SET NULL",
});

Address.belongsTo(User, {
  foreignKey: "user.username",
  onDelete: "SET NULL",
});

User.hasMany(Review, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Address, Review };

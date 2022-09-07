const User = require("./User");
const Address = require("./Address");
const Review = require("./Review");
const Stars = require("./Stars");

//associations
User.hasMany(Review, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL"
});


User.belongsToMany(Review, {
  through: Stars,
  as: "stars_reviews",

  foreignKey: "user_id",
  onDelete: "SET NULL"
});


Stars.belongsTo(Review, {
  foreignKey: "review_id",
  onDelete: "SET NULL"
});



User.hasMany(Stars, {
  foreignKey: "user_id"
});



Review.hasMany(Stars, {
  foreignKey: "review_id"
});


module.exports = { User, Review, Stars, Address };

const User = require("./User");
const Address = require("./Address");

//associations
User.hasMany(Address, {
  foreignKey: "user.username",
  onDelete: "SET NULL",
});

Address.belongsTo(User, {
  foreignKey: "user.username",
  onDelete: "SET NULL",
});

module.exports = { User, Address };

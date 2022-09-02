const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Address } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;

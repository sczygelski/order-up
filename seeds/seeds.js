const sequelize = require("../config/connection");
import { faker } from "@faker-js/faker";

const { User } = require("../models");

const randomUsername = faker.name.lastName(); // Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const setpassword = "password"



const seedDatabase = async () => {
  let generatedusers = []
  await sequelize.sync({ force: true });

    for (let i = 0; i < 10; i++) {
        User.create({
          "id": id,
          "username": randomUsername,
          "email": randomEmail,
          "password": setpassword
        })
    }
  process.exit(0);
};

seedDatabase();

const sequelize = require("../config/connection");
import { faker } from "@faker-js/faker";

const { User } = require("../models");

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

    for (let i = 0; i < 10; i++) {
        User.create(
            {username: }
        )
        
    }

  process.exit(0);
};

seedDatabase();

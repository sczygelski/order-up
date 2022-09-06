const sequelize = require("../config/connection");
import { faker } from "@faker-js/faker";

const { User, Address, Review } = require("../models");

const randomUsername = faker.name.lastName(); // Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const setpassword = "password"
const randomhouseNumber = faker.address.randombuildingNumber();
const randomStreet = faker.address.street();
const randomcity = faker.address.city();
const randomstate = faker.address.state();
const randomrating = faker.datatype.bigInt({max: 5});
const randomaddress = faker.address.streetAddress();
const randomreviewbody = faker.lorem.paragraph(4);
const randomexcerpt = faker.lorem.sentence();





const seedDatabase = async () => {
  let generatedusers = []
  await sequelize.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      User.create({
        id: id,
        username: randomUsername,
        email: randomEmail,
        password: setpassword
      })
    }

    for (let i = 0; i < 10; i++) {
      Address.create({
        id: id,
        houseNumber: randomhouseNumber,
        street: randomStreet,
        city: randomcity,
        state: randomstate
      })
      
    }

    for (let i = 0; i < 10; i++) {
      Review.create({
        id: id,
        rating: 
      })      
    }

    for (let i = 0; i < 10; i++) {
      Address.create({
        id: id,
        rating: randomrating,
        address: randomaddress,
        reviewbody: randomreviewbody,
        excerpt: randomexcerpt,
        user_id: id
      })
      
    }

  process.exit(0);
};

seedDatabase();

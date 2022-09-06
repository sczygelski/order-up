const sequelize = require('../config/connection')
const { Review } = require('../models')

const reviewdata = [
    {   rating: 1,
        address: 2,
        reviewbody: "This place had mice, I didn't like it very much and the landlord did not care either.",
        excerpt: "Not Nice Mice",
        user_id: 3
    },
    {   rating: 2,
        address: 2,
        reviewbody: "I wasn't very pleased with the amount of water damage that was throuhout the apartment. You could tell the ceilings had been severly damaged.",
        excerpt: "Water Damage",
        user_id: 1
    },
    {   rating: 5,
        address: 2,
        reviewbody: "No issues here! The landlord was very prompt in fixing things and I appreciated how lax he was with my cat",
        excerpt: "Great Landlord",
        user_id: 2
    },
]    

const seedReview = () => Address.bulkCreate(userdata, {individualHooks: true});

module.exports = seedReview;
const seedUser = require('./user-seeds')
const seedReview = require('./review-seeds')
const seedAddress = require('./address-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({force:true})
    await seedUser()
    await seedReview()
    await seedAddress()
    process.exit(0)
}

seedAll()
const sequelize = require('../config/connection')
const { Address } = require('../models')

const addressdata = [
    {
        houseNumber: '123',
        street: 'Main St',
        city: 'Madison',
        state: 'Wisconsin'
    },
    {
        houseNumber: '456',
        street: 'Washington Avenue',
        city: 'Middleton',
        state: 'Wisconsin'
    },
    {
        houseNumber: '789',
        street: 'Lakeshore Dr',
        city: 'Verona',
        state: 'Wisconsin'
    },
    {
        houseNumber: '901',
        street: 'Campus Dr',
        city: 'Minneapolis',
        state: 'Minnesota'
    },
    {
        houseNumber: '4837',
        street: '12th Ave',
        city: 'Sun Prarie',
        state: 'Wisconsin'
    }
]    

const seedAddress = () => Address.bulkCreate(addressdata, {individualHooks: true});

module.exports = seedAddress;
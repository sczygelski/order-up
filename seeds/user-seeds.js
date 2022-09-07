const sequelize = require('../config/connection')
const { User } = require('../models')

const userdata = [
    {        
        username: 'abc',
        email: 'abc@gmail.com',
        password: 'password'
    },
    {        
        username: 'def',
        email: 'def@gmail.com',
        password: 'password'
    },
    {        
        username: 'ghi',
        email: 'ghi@gmail.com',
        password: 'password'
    },
    {        
        username: 'jkl',
        email: 'jkl@gmail.com',
        password: 'password'
    },
    {        
        username: 'mno',
        email: 'mno@gmail.com',
        password: 'password'
    }
]

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true})

module.exports = seedUser
const { sequelize, Sequelize } = require('../config/database')

const User = require('./User')(sequelize, Sequelize)

module.exports = { User, sequelize }
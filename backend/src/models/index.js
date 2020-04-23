const { sequelize, Sequelize } = require('../config/database')

const User = require('./User')(sequelize, Sequelize)
const Story = require('./Story')(sequelize, Sequelize)

module.exports = { User, Story, sequelize }

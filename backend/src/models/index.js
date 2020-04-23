const { sequelize, Sequelize } = require('../config/database')

const User = require('./User')(sequelize, Sequelize)
const Story = require('./Story')(sequelize, Sequelize)

User.hasMany(Story, {
  onDelete: 'restrict',
  onUpdate: 'restrict',
  foreignKey: {
    allowNull: false
  }
})
Story.belongsTo(User) // adds FK userId to Story

module.exports = { sequelize, User, Story }

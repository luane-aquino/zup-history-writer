const { sequelize, Sequelize } = require('../config/database')

const User = require('./User')(sequelize, Sequelize)
const Story = require('./Story')(sequelize, Sequelize)
const Comment = require('./Comment')(sequelize, Sequelize)

// user-story relationship
User.hasMany(Story, {
  onDelete: 'restrict',
  onUpdate: 'restrict',
  foreignKey: {
    allowNull: false
  }
})
Story.belongsTo(User) // adds FK userId to Story table
// story-comment relationship
Story.hasMany(Comment, {
  onDelete: 'restrict',
  onUpdate: 'restrict',
  foreignKey: {
    allowNull: false
  }
})
Comment.belongsTo(Story) // adds FK storyId to Comment table
// user-comment relationship
module.exports = { sequelize, User, Story, Comment }

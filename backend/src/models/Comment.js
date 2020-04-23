module.exports = (sequelize, Sequelize) =>
  sequelize.define('comment', {
    comment: {
      type: Sequelize.TEXT
    }
  })

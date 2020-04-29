module.exports = (sequelize, Sequelize) =>
  sequelize.define('story', {
    title: {
      type: Sequelize.STRING
    },
    subtitle: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.STRING
    },
    text: {
      type: Sequelize.TEXT
    },
    photo: {
      type: Sequelize.STRING
    }
  })

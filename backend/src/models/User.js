module.exports = (sequelize, Sequelize) =>
  sequelize.define('user', {
    name: {
      type: Sequelize.STRING
    },
    about: {
      type: Sequelize.TEXT
    },
    isGoodWriter: {
      type: Sequelize.BOOLEAN
    },
    isGoodCritic: {
      type: Sequelize.BOOLEAN
    },
    photo: {
      type: Sequelize.STRING
    }
  })

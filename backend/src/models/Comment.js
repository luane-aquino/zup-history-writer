module.exports = (sequelize, Sequelize) =>
  sequelize.define('comment', {
    comment: {
      type: Sequelize.TEXT
    },
    like :{
      type: Sequelize.INTEGER,
      AllowNull: false
    },
    deslike :{
      type: Sequelize.INTEGER,
      AllowNull: false
    }
  })

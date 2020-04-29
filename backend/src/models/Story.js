module.exports = (sequelize, Sequelize) =>
  sequelize.define('story', {
    title: {
      type: Sequelize.STRING
    },
    subtitle: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.ENUM,
      values: ['drama', 'terror', 'aventura', 'romance']
    },
    text: {
      type: Sequelize.TEXT
    },
    photo: {
      type: Sequelize.STRING
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

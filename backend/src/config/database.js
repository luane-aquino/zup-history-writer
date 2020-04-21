const Sequelize = require('sequelize')

const sequelize = new Sequelize('writerdb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

// force: true will drop the table if it already exists
User.sync({ force: true }).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  })
})

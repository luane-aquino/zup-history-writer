const { User } = require('../models')
const { Story } = require('../models')

module.exports = {
  create: async (req, res) => {
    const user = req.body

    await User.create({ ...user })
    res.send(200).json({ message: 'success!!' })
  }
}

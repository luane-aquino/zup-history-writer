const { User } = require('../models')
const { Story } = require('../models')

module.exports = {
  create: async (req, res) => {
    const story = req.body
    console.log('**', story)
    await Story.create({ ...story })
    res.status(200).json({ message: 'success!!' })
  }
}

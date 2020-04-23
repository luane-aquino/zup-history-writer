const { User } = require('../models')
const { Story } = require('../models')

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = req.body
      await User.create({ ...user })
      res.status(200).json({ message: 'success!!' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  },
  getUserById: async (req, res) => {
    try {
      const { params: { id } } = req
      const userExist = await User.findOne({ where: { id } })

      if (userExist) res.status(200).json(userExist)
      else res.status(404).json({ message: 'user not found' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  },
  createStory: async (req, res) => {
    try {
      const { params: { id } } = req
      const story = req.body
      await Story.create({
        ...story,
        userId: id
      })
      res.status(200).json({ message: 'success!!' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  }
}

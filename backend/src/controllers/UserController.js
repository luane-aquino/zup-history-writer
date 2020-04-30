const { User } = require('../models')
const { Story } = require('../models')
const { Comment } = require('../models')

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
  },
  getStories: async (req, res) => {
    try {
      const { params: { id } } = req
      const hasLogs = await Story.findAll({
        where: { userId: id }
      })

      if (hasLogs) res.status(200).json(hasLogs)
      else res.status(200).json({ message: 'no stories to show' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  },

  getUserProfile: async (req, res) => {
    try {
      let verifyCritic = false;
      const { params: { id } } = req

      new Promise((resolve, reject) => {
        Comment.findAll({
          where: { storyId: 1 }
        }).then(comment => comment.forEach(content => {
          if (content.like >= 4) {
            verifyCritic = true;
          }
        })
        )
        resolve()

      }).then(() => {
        User.findOne({
          where: { id }
        }).then(user => {
          if (verifyCritic) {
            user.update({ isGoodCritic: true })
          } else { user.update({ isGoodCritic: false }) }
        })
      })
      
      const userExist = await User.findAll({
        where: { id },
        include: [{ model: Story }]
      })

      if (userExist) res.status(200).json(userExist)
      else res.status(404).json({ message: 'user not found' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  }

}

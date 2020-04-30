const { User } = require('../models')
const { Story } = require('../models')
const { Comment } = require('../models')

module.exports = {
  createComment: async (req, res) => {
    try {
      const { params: { id } } = req
      const comment = req.body
      await Comment.create({
        ...comment,
        storyId: id
      })
      res.status(200).json({ message: 'success!!' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  },
  getComments: async (req, res) => {
    try {
      const { params: { id } } = req
      const hasComments = await Comment.findAll({
        where: { storyId: id }
      })
      console.log(typeof hasComments)
      if (hasComments) res.status(200).json(hasComments)
      else res.status(200).json({ message: 'no comments to show' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  },
  getStoryById: async (req, res) => {
    try {
      const { params: { id } } = req
      const storyExist = await Story.findOne({
        where: { id }
      })

      if (storyExist) res.status(200).json(storyExist)
      else res.status(200).json({ message: 'no stories to show' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  }

}

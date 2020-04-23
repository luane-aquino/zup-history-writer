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
  }
}

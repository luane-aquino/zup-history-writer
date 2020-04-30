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
        like: 0,
        deslike: 0,
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

  getCommentLike: async (req, res) => {
    try {
      const { params: { id, idComment } } = req
      Comment.findOne({
        where: { id: idComment, storyId: id }
      }).then(comment =>{
        let value = comment.like;
        comment.update({like: value + 1}) 
      })

      const hasLikes = await Comment.findOne({
        where: { id: idComment, storyId: id }
      })
      
      if (hasLikes) res.status(200).json(hasLikes)
      else res.status(200).json({ message: 'no comments to show' })
    } catch (error) {
      res.status(500).json({ error: 'internal server error...' })
    }
  },

  getCommentDeslike: async (req, res) => {
    try {
      const { params: { id, idComment } } = req
      Comment.findOne({
        where: { id: idComment, storyId: id }
      }).then(comment =>{
        let value = comment.deslike;
        comment.update({deslike: value + 1}) 
      })

      const hasLikes = await Comment.findOne({
        where: { id: idComment, storyId: id }
      })
      
      if (hasLikes) res.status(200).json(hasLikes)
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

const express = require('express')
const router = express.Router()
const controller = require('../controllers/StoryController')

router.get('/:id', controller.getStoryById)

router.post('/:id/comment', controller.createComment)

router.get('/:id/comments', controller.getComments)

router.patch('/:id/commentLike/:idComment', controller.getCommentLike)
router.patch('/:id/commentDeslike/:idComment', controller.getCommentDeslike)

module.exports = router

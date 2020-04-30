const express = require('express')
const router = express.Router()
const controller = require('../controllers/StoryController')

router.get('/:id', controller.getStoryById)

router.post('/:id/comment', controller.createComment)

router.get('/:id/comments', controller.getComments)

router.post('/:id/commentLike/:idComment', controller.commentLike)

module.exports = router

const express = require('express')
const router = express.Router()
const controller = require('../controllers/StoryController')

router.post('/:id/comment', controller.createComment)

router.get('/:id/comments', controller.getComments)

module.exports = router

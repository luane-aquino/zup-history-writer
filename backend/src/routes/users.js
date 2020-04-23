const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')

router.post('/signup', controller.createUser)

router.get('/:id', controller.getUserById)

router.post('/:id/story', controller.createStory)

module.exports = router

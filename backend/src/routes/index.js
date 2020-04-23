const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
const storyRoutes = require('./story')

router.use('/user', userRoutes)
router.use('/story', storyRoutes)

module.exports = router

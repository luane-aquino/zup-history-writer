const express = require('express')
const router = express.Router()
const usersRoute = require('./users')
const storiesRoute = require('./stories')

router.use('/user', usersRoute)
router.use('/story', storiesRoute)

module.exports = router

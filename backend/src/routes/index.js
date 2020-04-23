const express = require('express')
const router = express.Router()
const userRoutes = require('./user')
// const storiesRoute = require('./story')

router.use('/user', userRoutes)
// router.use('/story', storiesRoute)

module.exports = router

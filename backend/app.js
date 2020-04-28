const express = require('express')
const bodyParser = require('body-parser')
const routes = require('../backend/src/routes')
const cors = require('cors')
const app = express()

app.use(cors({
  credentials: true,
}))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

module.exports = {
  app
}

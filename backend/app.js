const express = require('express')
const bodyParser = require('body-parser')
const routes = require('../backend/src/routes')
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

module.exports = {
  app
}

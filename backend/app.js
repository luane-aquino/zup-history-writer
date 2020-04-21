const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/story', (req, res) => {
  const story = req.body
  res.status(200).json({ message: "successfull" })
})

app.post('/comment', (req, res) => {
  const comment = req.body
  res.status(200).json({ message: "successfull" })
})

app.listen(3000)
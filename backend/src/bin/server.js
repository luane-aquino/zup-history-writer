const { app } = require('../../app')

const port = 3306

app.listen(port, () => {
  console.log(`Listening at port: ${port}`)
})

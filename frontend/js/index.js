const axios = require('axios')

console.log('****luuuuuuu')

axios.get('http://localhost:3000/story/1/comments')
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })

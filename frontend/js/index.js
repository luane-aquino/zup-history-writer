const comment = document.getElementById('comment')

axios.get('http://localhost:3000/story/1/comments')
  .then(function (response) {
    // handle success
    console.log('**', response.data[0].comment)
    comment.innerHTML = `${response.data[0].comment}`
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })

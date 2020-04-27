const storyText = document.getElementById('story-text')
const storyTitle = document.getElementById('story-title')
const storySubtitle = document.getElementById('story-subtitle')
const storyAuthor = document.getElementById('story-author')

// TODO: add endpoint /story/:id
function getStory() {
  axios.get('http://localhost:3000/user/1/stories')
    .then(response => {
      storyTitle.innerHTML = response.data[2].title
      storySubtitle.innerHTML = response.data[2].subtitle
      storyText.innerHTML = response.data[2].text
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getUser() {
  axios.get('http://localhost:3000/user/1')
    .then(response => {
      storyAuthor.innerHTML = response.data.name
    })
    .catch(function (error) {
      console.log(error)
    })
}

window.addEventListener('DOMContentLoaded', () => {
  getUser()
  getStory()
})

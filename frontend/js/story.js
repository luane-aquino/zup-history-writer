const storyText = document.getElementById('story-text')
const storyTitle = document.getElementById('story-title')
const storySubtitle = document.getElementById('story-subtitle')
const storyAuthor = document.getElementById('story-author')

function getStory() {
  axios.get('http://localhost:3000/story/3')
    .then(response => {
      storyTitle.innerHTML = response.data.title
      storySubtitle.innerHTML = response.data.subtitle
      storyText.innerHTML = response.data.text
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

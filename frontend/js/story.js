const storyText = document.getElementById('story-text')
const storyTitle = document.getElementById('story-title')
const storySubtitle = document.getElementById('story-subtitle')

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

window.addEventListener('DOMContentLoaded', () => {
  getStory()
})

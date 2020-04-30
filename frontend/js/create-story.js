const sendStoryBtn = document.getElementById('create-story-btn')
const title = document.getElementById('title')
const subtitle = document.getElementById('subtitle')
const story = document.getElementById('story')
const tags = document.getElementById('tags')

sendStoryBtn.addEventListener('click', () => {
  console.log('hey, you clicked me!')
  axios.post('http://localhost:3000/user/1/story', {
    title: title.value,
    subtitle: subtitle.value,
    tags: tags.value,
    text: story.value,
    photo: "photo1.png"
  }).then(function (response) {
    title.value = ''
    subtitle.value = ''
    story.value = ''
    tags.value = ''
  }).catch(function (error) {
    console.log(error)
  })
})

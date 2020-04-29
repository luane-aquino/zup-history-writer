const sendStoryBtn = document.getElementById('create-story-btn')
const title = document.getElementById('title')
const subtitle = document.getElementById('subtitle')
const story = document.getElementById('story')
const tags = document.getElementById('tags')
// tag input field
const tagContainer = document.querySelector('.tag-container')
const tagInput = document.querySelector('.tag-container input')
let tagsArr = []

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

/* tag input field */
function createTag(label) {
  const div = document.createElement('div')
  div.setAttribute('class', 'tag')
  const span = document.createElement('span')
  span.innerHTML = label
  const closeBtn = document.createElement('i')
  closeBtn.setAttribute('class', 'material-icons')
  closeBtn.setAttribute('data-item', label)
  closeBtn.innerHTML = 'close'

  div.appendChild(span)
  div.appendChild(closeBtn)
  return div
}

function reset() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag)
  })
}

function addTags() {
  reset()
  tagsArr.slice().reverse().forEach(tag => {
    const newElem = createTag(tag)
    tagContainer.prepend(newElem)
  })
}

tagInput.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    tagsArr.push(tagInput.value)
    addTags()
    tagInput.value = ''
  }
})

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'I') {
    const value = e.target.getAttribute('data-item')
    const index = tagsArr.indexOf(value)
    tagsArr = [...tagsArr.slice(0, index), ...tagsArr.slice(index + 1)]
    addTags()
  }
})

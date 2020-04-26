const commentList = document.getElementById('comment__list__container')
const commentBtn = document.getElementById('comment-btn')
const commentTextarea = document.getElementById('comment-textarea')

axios.get('http://localhost:3000/story/1/comments')
  .then(response => {
    let allComments = ''
    for (const item of response.data) {
      allComments += `
      <li>
        <img src="./images/yoda-profile.jpg" alt="yoda">
        <p>${item.comment}</p>
        <div>
          <button class="btn green">Ajudou</button>
          <button class="btn red btn--larger">Não ajudou</button>
        </div>
      </li>
      `
    }
    commentList.innerHTML = allComments
  })
  .catch(function (error) {
    console.log(error)
  })

commentBtn.addEventListener('click', () => {
  console.log('****')
  axios.post('http://localhost:3000/story/1/comment', {
    comment: commentTextarea.value
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
})

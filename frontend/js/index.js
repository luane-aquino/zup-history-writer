const commentList = document.getElementById('comment__list__container')

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

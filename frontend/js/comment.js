const commentList = document.getElementById('comment__list__container')
const commentBtn = document.getElementById('comment-btn')
const commentTextarea = document.getElementById('comment-textarea')

function getAllComments() {
  axios.get('http://localhost:3000/story/1/comments')
    .then(response => {
      let ids = []
      let allComments = ''
      for (const item of response.data) {
        allComments += `
      <li>
        <img src="./images/yoda-profile.jpg" alt="yoda">
        <p>${item.comment}</p>
        <div>
          <button class="btn green" id="btn-true-${item.id}">Ajudou</button>
          <label class="l-true" id="lt${item.id}">${item.like}</label>
          <button class="btn red btn--larger" id="btn-false-${item.id}">Não ajudou</button>
          <label class="l-false" id="lf${item.id}">${item.deslike}</label>
        </div>
      </li>
      `
      ids.push(item.id);
      }
      commentList.innerHTML = allComments

      ids.forEach( value => {
        let id = "btn-true-"+value;
        document.getElementById(id).onclick = setCurtidas(id, true);
      });
      
      ids.forEach( value => {
        let id = "btn-false-"+value;
        document.getElementById(id).onclick = setCurtidas(id, false);
      });

    })
    .catch(function (error) {
      console.log(error)
    })
}

commentBtn.addEventListener('click', () => {
  axios.post('http://localhost:3000/story/1/comment', {
    comment: commentTextarea.value

  })
    .then(function (response) {
      console.log(response)
      commentTextarea.value = ''
      getAllComments()
    })
    .catch(function (error) {
      console.log(error)
    })
})

window.addEventListener('DOMContentLoaded', () => {
  getAllComments()
})


function setCurtidas(idComment, like) {
  if (like) {
      document.getElementById(idComment).addEventListener('click', () => {
      let id = idComment.slice(9, idComment.length+1)
      axios.patch(`http://localhost:3000/story/1/commentLike/${id}`)
        .then(function (response) {
          const idComent = response.data.id
          const label = document.getElementById("lt"+idComent)
          label.innerHTML=""
          const like = document.createTextNode(response.data.like)
          label.appendChild(like)
        })
        .catch(function (error) {
          console.log(error)
        })
    })
  }
  if (!like) {
    document.getElementById(idComment).addEventListener('click', () => {
      let id = idComment.slice(10, idComment.length+1)
      axios.patch(`http://localhost:3000/story/1/commentDeslike/${id}`)
        .then(function (response) {
          const idComent = response.data.id
          const label = document.getElementById("lf"+idComent)
          label.innerHTML=""
          const deslike = document.createTextNode(response.data.deslike)
          label.appendChild(deslike)
        })
        .catch(function (error) {
          console.log(error)
        })


    })
  }
}

function getAllComments() {
    axios.get('http://localhost:3000/story/1/comments')
        .then(response => {
            let allComments = ''
            for (const item of response.data) {
                allComments += `
        <li>
          <img src="./images/yoda-profile.jpg" alt="yoda">
          <p>${item.comment}</p>
          <div">
            <button class="btn green" onclick="setCurtidas(${item.id}, true, ${item.like})">Ajudou</button>
            <button class="btn red btn--larger" onclick="setCurtidas(${item.id}, false, ${item.deslike})">Não ajudou</button>
          </div>
        </li>
        `
            }
            
            function setCurtidas(idComment, like, numLikes)
            if (like) {
                document.getElementById(idComment).addEventListener('click', () => {
                    axios.get(`http://localhost:3000/story/${idComment}/commentLike`)
                        .then(function (response) {
                        })
                        .catch(function (error) {
                            console.log(error)
                        })


                })
            }
            if (!like) {
                commentBtn.addEventListener('click', () => {
                    axios.get(`http://localhost:3000/story/${idComment}/commentDeslike`)
                        .then(function (response) {
                        })
                        .catch(function (error) {
                        })


                })
            }

            commentList.innerHTML = allComments
        })
        .catch(function (error) {
            console.log(error)
        })
}
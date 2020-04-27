const h1Title = document.getElementById('name-user')

function getAllComments() {
  axios.get('localhost:3000/user/1/allInformations')
    .then(response => {
      let textNode = document.createTextNode(response.data.name);
      h1Title.appendChild(textNode);
    //   for (const item of response.data) {
    //     allComments += `
    //   <li>
    //     <img src="./images/yoda-profile.jpg" alt="yoda">
    //     <p>${item.comment}</p>
    //     <div>
    //       <button class="btn green">Ajudou</button>
    //       <button class="btn red btn--larger">Não ajudou</button>
    //     </div>
    //   </li>
    //   `
    //   }
    //   commentList.innerHTML = allComments
    })
    .catch(function (error) {
      console.log(error)
    })
}



window.addEventListener('DOMContentLoaded', () => {
  getAllComments()
})

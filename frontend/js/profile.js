const h1Title = document.getElementById('name-user')
const spanNameDesc = document.getElementById('name-desc')
const pDesc = document.getElementById('pDesc')
const ulTitleStoris = document.getElementById('titleStoris');
const badgeEscritor = document.querySelector('.bom-escritor-icon')
const badgeCritico = document.querySelector('.bom-critico-icon')
const badgeArea = document.querySelector('.div-badges')

function getAllInformations() {

  axios.get('http://localhost:3000/user/1/userProfile')
    .then(response => {

      let textNodeH1 = document.createTextNode(response.data[0].name);
      console.log(response.data[0].name)
      let textNodeSpanNameDesc = document.createTextNode(response.data[0].name);
      let textDesc = document.createTextNode(response.data[0].about);
      h1Title.appendChild(textNodeH1);
      spanNameDesc.appendChild(textNodeSpanNameDesc);
      pDesc.appendChild(textDesc);
      if (!response.data[0].isGoodWriter) {
        badgeEscritor.style.display = "none";
        badgeArea.style.gridTemplateAreas = '"conq . .""critico escritor ."';
      }
      if (!response.data[0].isGoodCritic) badgeCritico.style.display = "none";


      response.data[0].stories.forEach(value => {
        let newH1 = document.createElement("h1");
        let newH2 = document.createElement("h2");
        let newli = document.createElement("li");
        let h1Title = document.createTextNode(value.title);
        let h2Subtitle = document.createTextNode(value.subtitle);
        let newA = document.createElement("a")
        newA.setAttribute('href', '../html/story.html')

        newH1.appendChild(h1Title);
        newH2.appendChild(h2Subtitle);

        newli.appendChild(newA);
        newA.appendChild(newH1);
        newA.appendChild(newH2);
        ulTitleStoris.appendChild(newli);

        console.log(value.title)
      })
    })
    .catch(function (error) {
      b = "error";
      console.log(error)
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    })
}



window.addEventListener('DOMContentLoaded', () => {
  getAllInformations()
})

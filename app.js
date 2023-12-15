// https://api.github.com/users/

const API = "https://api.github.com/users/";
const resultat = document.querySelector('.resultat');
const form = document.querySelector('.form-github-recherche');
const inp = document.querySelector('.inp-search');


async function dataGithub(utilisateur){
    const reponse = await fetch(`${API}${utilisateur}`)
    const data = await reponse.json()

    console.log(data);

    creationCarte(data)
}

dataGithub('jbtzcodes')

function creationCarte(user){
    const carteHTML = `
    <div class="carte">
    <img src=${user.avatar_url}" alt="avatar"
    class="avatar">
    <h2>${user.name}</h2>
    <ul class="cont-infos">
    <li class="follow">Followers : ${user.followers}</li>
    <li class="etoiles">Repos : ${user.public_repos}</li>
    <li class="bio">Biographie : ${user.bio}</li>
    </ul>
    </div>  
    `;
    resultat.innerHTML = carteHTML;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(inp.value.length > 0){
        dataGithub(inp.value);
        inp.value = "";
    }
})
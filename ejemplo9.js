async function showGitHubPersonal() {
  //fetch devuelve una promesa
  let response = await fetch("https://api.github.com/users/Jose-J-S/repos");
  //json() también retorna una promesa
  let listaRepos = await response.json();
  console.log(listaRepos);
}

// showGitHubPersonal();

function getRepos() {
  fetch("https://api.github.com/users/Jose-J-S/repos")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos);
    });
}

getRepos();

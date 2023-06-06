//FUnción basada en promesas
let request = require("request");

//Esta función retorna una promesa... then() catch() finally()
//La clase Promise requiere de un executor (resolve:true, rechazada:false)
//callback: función que retorna un valor
function loadPage(url) {
  return new Promise(function (resolve, reject) {
    request(url, (error, response) => {
      if (error) return reject(error);
      resolve(response);
    });
  });
}

let promesa = loadPage("https://google.com");

//Nos devuelve => Promise { <pending> }
// console.log(promesa);

promesa
  .then(() => {
    console.log("URL cargada");
  })
  .catch(() => {
    console.log("Problemas al cargar la URL");
  });

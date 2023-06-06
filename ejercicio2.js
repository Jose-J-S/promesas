let request = require("request-promise");

//Las promesas retornan OBJETOS
let promesa = request("https://google.com");
// console.log(promesa);

//Se administran utilizando...
//fullfiled = completada con éxito
promesa.then(() => {
  console.log("URL cargada");
});

//reject = rechazado
promesa.catch((error) => {
  console.log("Falló la consulta");
  console.log(error);
});

//Se ejecuta luego de then/catch
//settled = finalizado
promesa.finally(() => {
  console.log("Promesa finalizada");
});

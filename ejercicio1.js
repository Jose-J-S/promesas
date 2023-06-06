let request = require("request");

request("https://www.senati.edu.pe", function () {
  console.log("URL cargada correctamente");
});

//Este método log se ejecuta antes, ya que todo el código se interpreta en pararelo
console.log("Esto debe suceder después");

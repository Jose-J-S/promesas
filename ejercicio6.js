//Funciones Tradicionales
function saludar(nombre) {
  return `Bienvenido ${nombre}`;
}

function mostrarAmigos() {
  return ["Juan", "Luis", "Pedro"];
}

let resutlado1 = saludar("Jose");
let resutlado2 = mostrarAmigos();

// console.log(resutlado1); //Forma 1
// console.log(mostrarAmigos()); //Forma 2

//Objeto
//Función flecha
const perfil = {
  'apellidos'   : 'Jacobo Saravia',
  'nombres'     : 'José Jacobo',
  'edad'        : 38,
  'estaCasado'  : false,
  'amigos'      : ['Lorenzo', 'César', 'Joel'],
  'contacto'    : {
  'telefonos'   : ['987654321'],
  'ciudad'      : 'Chincha',
  'casaPropia'  : true
  },
  'skill'       : function (){
    // console.log("¡Yo sé programar!")
    return "Yo sé programar";
  }
};

console.log(perfil.skill());
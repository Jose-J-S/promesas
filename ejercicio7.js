async function sumar(a, b) {
  //El retorno construye y asume resolve para la promesa IMPLÍCITA
  /* 
  return new Promise((resolve, reject) => {
    valor1 + valor2
  })
  */
  return a + b;
}

async function calcular(num) {
  return new Promise((resolve, reject) => {
    //setTimeout(callback, tiempoEspera, resultado)
    setTimeout(resolve, 1000, 20);
  });
}

//El resultado será un promesa con valor 15
//el estado pendiente no se muestra ya que se ejecuta INMEDIATAMENTE
console.log(sumar(5, 10));

//Proceso pendiente (espera...)
console.log(calcular());

//¿Cómo vemos el valor que nos trae la promesa en la función calcular()?
calcular().then((res) => {
  console.log(res);
});

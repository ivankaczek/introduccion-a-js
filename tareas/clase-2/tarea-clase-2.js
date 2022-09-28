// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(numero1, numero2) {
  return numero1 + numero2;
}
function restar(numero1, numero2) {
  return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}
function dividir(numero1, numero2) {
  return numero1 / numero2;
}

function consultarOperador() {
  const operador = prompt(`Por favor ingrese el operador que desee (+,*,*,/)
    para hacer una operacion matematica`);
  return operador;
}

function consultarUnNumero() {
  const numeroIngresado = Number(prompt("Por favor ingrese un numero"));
  return numeroIngresado;
}

function pedirDatos() {
  const numeroUsuario1 = consultarUnNumero();
  const numeroUsuario2 = consultarUnNumero();
  const operadorUsuario = consultarOperador();
  return [numeroUsuario1, numeroUsuario2, operadorUsuario];
}

//let datosIngresados = pedirDatos();

function realizarOperacion(arrayDatosUsuario) {
  const numeroUsuario1 = arrayDatosUsuario[0];
  const numeroUsuario2 = arrayDatosUsuario[1];
  const operadorUsuario = arrayDatosUsuario[2];
  let resultado;

  if (operadorUsuario === "+") {
    resultado = sumar(numeroUsuario1, numeroUsuario2);
  } else if (operadorUsuario === "-") {
    resultado = restar(numeroUsuario1, numeroUsuario2);
  } else if (operadorUsuario === "*") {
    resultado = multiplicar(numeroUsuario1, numeroUsuario2);
  } else if (operadorUsuario === "/") {
    resultado = dividir(numeroUsuario1, numeroUsuario2);
  } else {
    resultado = `dificil de calcular, no conozco el operador ${operadorUsuario}`;
  }
  return resultado;
}

function mostrarResultado(arrayDatosUsuario) {
  alert(`El resultado de ${arrayDatosUsuario[0]} ${
    arrayDatosUsuario[2]} ${arrayDatosUsuario[1]} es ${realizarOperacion(arrayDatosUsuario)}`);
}



function ejecutarTareaClase2(){
  const datosIngresados = pedirDatos();
  mostrarResultado(datosIngresados);
}

ejecutarTareaClase2();

/*
let resultadoOperacion = realizarOperacion(datosIngresados);
console.log(resultadoOperacion);
*/

/*
    >>>> OTRA POSIBLE MANERA TAL CUAL APARECIA EN EL GIT 

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

const operador = prompt('Ingrese + o -');
const numero1 = 1;
const numero2 = 2;

let resultado;
if (operador === '+') {
    resultado = sumar(numero1, numero2);
} else {
    resultado = restar(numero1, numero2);
}

*/

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings

/*
console.log(
    `El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`
);

*/

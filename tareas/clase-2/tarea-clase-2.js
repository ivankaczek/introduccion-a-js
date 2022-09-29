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

const numeroUsuario1 = consultarUnNumero();
const numeroUsuario2 = consultarUnNumero();
const operadorUsuario = consultarOperador();

function realizarOperacion(numero1,numero2,operador) {
  let resultado;
  if (operador === "+") {
    resultado = `El resultado de ${numero1} ${operador} ${numero2
    } es ${sumar(numero1,numero2)}`;
  } else if (operador === "-") {
    resultado = `El resultado de ${numero1}  ${operador} ${numero2
    } es ${restar(numero1, numero2)}`;
  } else if (operador === "*") {
    resultado = `El resultado de ${numero1} ${operador} ${numero2
    } es ${multiplicar(numero1, numero2)}`;
  } else if (operador === "/") {
    resultado = `El resultado de ${numero1} ${operador} ${numero2
    } es ${dividir(numero1,numero2)}`;
  } else {
    resultado = `dificil de calcular, no conozco el operador ${operador}`;
  }
  console.log(resultado);
}

realizarOperacion(numeroUsuario1,numeroUsuario2,operadorUsuario);

/*

CORRECCIONES DEL PROFE EN LA CLASE 2
no vimos arrays para esta clase, la estructura adecuada de pedirDatos 
debería ser un objeto



Fabricio Sodano
  hace 13 horas
lo de arrayDatosUsuario está mal, primero porque el nombre no tiene sentido, 
ponele "array" no tiene sentido, el plural ya te dice que es un array, y ponele "datos" 
es lo mismo que ponerle "coso", no te da ninguna información adicional.
Lo mejor es que tu función tome los 3 parámetros que necesita y ya
realizarOperacion(operador, numero1, numero2)


Fabricio Sodano
  hace 13 horas
la función pedirDatos la podés eliminar completamente


Fabricio Sodano
  hace 13 horas
yo te diría que la función realizar Operacion te devuelve ya el texto completo 
(para no devolverte a veces texto y a veces un número) y después hacés el console.log de eso (editado) 
*/



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

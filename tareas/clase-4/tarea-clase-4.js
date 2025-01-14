// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function tarea1() {
  console.log("Tarea 1: imprimir cada 3er numero del 3 al 22 con un bucle for");
  for (let i = 3; i <= 22; i += 3) {
    console.log(i);
  }
}


function tarea2() {
  console.log('Tarea 2: imprimir los numeros del 10 al 1 con un bucle while');
  let contadorBucle = 10;
  while (contadorBucle > 0) {
    console.log(contadorBucle);
    contadorBucle--;
  }
}

function tarea3FizzBuzzClasico() {
    console.log('Ejercicio FizzBuzz');
    for (let i = 1; i <= 50; i++) {
        if(i%15 === 0) {
            console.log('FizzBuzz');
        } else if (i%5=== 0){
            console.log('Buzz');
        } else if (i%3===0){
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }

}

function FizzBuzzResolucionElegante(){
    for (let i = 1; i < 50; i++) {
      let texto = "";
      if(i%3 === 0){
        texto='Fizz';
      }
      if(i%5=== 0){
        texto += 'Buzz';
      }
      console.log (texto || i);
    }
}





function calcularPromedio(arrayEnteros){
    let acumulado = 0;
    for (let i = 0; i < arrayEnteros.length; i++) {
        acumulado += arrayEnteros[i];
    }
    return acumulado/arrayEnteros.length;
}

function tarea4() {
    console.log('Calculo de promedios');
    const numeros = [4,5,10,22,15,24,12];
    const promedio = calcularPromedio(numeros);
    console.log(`promedio = ${promedio}`);
}

tarea1();
tarea2();
tarea3FizzBuzzClasico();
tarea4();


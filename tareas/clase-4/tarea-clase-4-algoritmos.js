//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

function algoritmo01() {
  for(let i = 1; i<=10; i++) {
    console.log(i);
  }
}

function algoritmo02(){
  for (let i= 1; i<=100; i+=2){
    console.log(i);
  }
}

function algoritmo03(){
  for (let i=0; i<=10; i++){
    console.log(`7 x ${i} = ${7*i}`);
  }
}

function algoritmo04(){
  for(let i=1; i<=9; i++){
    for(let j = 0; j<=10; j++){
      console.log(`${i} x ${j} = ${i*j}`);
    }
  }
}

function algoritmo05(){
  //Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 //[1,2,3,4,5,6,7,8,9,10]
 let numeros = [1,2,3,4,5,6,7,8,9,10];
 let resultado = 0;
 for (let i = 0; i<numeros.length ; i++){
  resultado += numeros[i];
 }
 console.log(resultado);
}

function factorial(numero){
  // Desafío de programación #6: Calcula 10! (10 factorial)
  let resultado = 1;
  for(let i= 1; i<= numero; i++){
    resultado *= i;
  }
  console.log(resultado);
}

function algoritmo06(){
  const NUMERO = 10;
  factorial(NUMERO);
}

function algoritmo07(){
  /*Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y 
menores que 30
  */
  let suma = 0;
  const NUMERO_INICIO = 10;
  const NUMERO_FINAL = 30;
  for( let i = NUMERO_INICIO; i<NUMERO_FINAL; i++){
    if(i%2 === 1){
      suma += i;
    }
  }
  console.log(`La suma de los números impares mayores que ${
    NUMERO_INICIO} y menores que ${NUMERO_FINAL} es ${suma}`);
}

function algoritmo08(){
  function convertirCelciusAFahrenheit(gradosCelcius){
      const gradosFahrenheit = gradosCelcius*(9/5) + 32
      console.log(`${gradosCelcius} °C = ${gradosFahrenheit} °F`);
  }
  
  convertirCelciusAFahrenheit(27);
}

function algoritmo09(){
  function convertirFahrenheitACelcius(gradosFahrenheit){
      const gradosCelcius = ((gradosFahrenheit-32)*5/9).toFixed(2);
      console.log(`${gradosFahrenheit} °F = ${gradosCelcius} °C`);
  }
  convertirFahrenheitACelcius(81);
}



function algoritmo10(){
  //Desafío de programación #10: Calcula la suma de todos los números en un array de números
  function sumar(numeros){
    let resultado = 0;
    for (let i = 0; i<numeros.length ; i++){
      resultado += numeros[i];
    }
    return resultado;
  }
  const numerosEnteros = [4,8,12,22,1];
  console.log(`la suma de los números del array [${numerosEnteros}] es ${sumar(numerosEnteros)}`)
}

function algoritmo11(){
  //Desafío #11: Calcula el promedio de todos los números en un array de números. (en una función)
  function promedio(numeros){
    let acumulado = 0;
    for(let i = 0; i<numeros.length ; i++){
      acumulado += numeros[i];
    }
    return (acumulado/numeros.length).toFixed(2);
  }

  const numerosEnteros = [4,8,10,3,1];
  console.log(`el promedio de los numeros [${numerosEnteros}] es ${promedio(numerosEnteros)}`);
}

function algoritmo12(){
  /*Desafío de programación #12: Crea una función que reciba un array de números y 
devuelva un array conteniendo solo los números positivos */
  function devolverPositivos(numeros){
    let positivos = [];
    for (let i= 0; i<numeros.length; i++){
      if(numeros[i] > 0){
        positivos.push(numeros[i]);
      }
    }
    return positivos;
  }
  
  const numeros = [4,-8,10,-3,1,-11,-121];
  console.log(`los números positivos son: ${devolverPositivos(numeros)}`);
}

function algoritmo13(){
  /*Desafío de programación #13: Find the maximum number in an array of numbers */
  function devolverMaximo(numeros){
    let resultado = numeros[0];
    for (let i = 0; i<numeros.length ; i++) {
      if(numeros[i] > resultado){
        resultado = numeros[i];
      }
    }
    return resultado;
  }
  const numeros = [13,-8,10,-3,1,-11,-121];
  console.log(`el mayor de los numeros es ${devolverMaximo(numeros)}`);

}


function algoritmo14(){
/*Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 */
  function fibonacci(entero){
    if (entero === 0) {
      return 0;
    } else if (entero === 1) {
      return 1;
    } else {
      let contador = 2;
      let dosNumerosAntes = 0;
      let unNumeroAntes = 1;
      let acumuladoFibonacci = 0;
      while(contador<=entero) {
        acumuladoFibonacci = dosNumerosAntes + unNumeroAntes;
        dosNumerosAntes = unNumeroAntes;
        unNumeroAntes = acumuladoFibonacci;
        contador++;
      }
      return acumuladoFibonacci;
    }

  }
  let calcularHasta = 10;
  for (let i = 0; i<= calcularHasta; i++) {
    console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
  }
}

function algoritmo15(){
  /*Desafío de programación #15: Crear una función que encuentre el número n de 
Fibonacci usando recursión   */
  function fibonacciRecursion(entero){
    if(entero === 0){
      return 0;
    } else if (entero === 1) {
      return 1;
    } else {
      return (fibonacciRecursion(entero-2) + (fibonacciRecursion(entero-1)));
    }
  }

  const entero = 10;
  console.log(`${fibonacciRecursion(entero)}`);
}

function verificarNumeroPrimo(entero){
  let esPrimo = true;
 
    for(let i = 2; i <= (entero/2); i++) {
      if (entero%i === 0){
        esPrimo = false;
        return false;
      }
    }
  
  return esPrimo;
}

function algoritmo16(){
  

  const entero = 18;
   console.log(`${entero} es primo: ${verificarNumeroPrimo(entero)}`);

}

function algoritmo17(){
  /* Desafío de programación #17: Calcular la suma de los dígitos positivos 
  de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10*/

    function sumar(numeros){
      let resultado = 0;
        for (let i = 0; i<numeros.length ; i++){
          resultado += numeros[i];
        }
      return resultado;
    }

    function sumarDigitosUsandoString(entero){
      const numeroString = entero.toString();
      const cifras = numeroString.split('');
      let suma = 0;
      for(let i = 0; i<cifras.length; i++){
        suma += Number(cifras[i]);
      }
      return suma;
    }

    function guardarUltimaCifra(entero){
      return entero%10;
    }

    function truncarUltimaCifra(entero){
      const ultimaCifra = entero%10;
      return (entero - ultimaCifra)/10;
    }

    function sumarDigitosUsandoModulo(entero){
      let acumulado = 0;
      let seguirAdelante = true;
      while(seguirAdelante){
        acumulado += guardarUltimaCifra(entero);
        entero = truncarUltimaCifra(entero);
        if(entero<1) {
          seguirAdelante = false;
        }
      }
      return acumulado;
    }
    const numeroPrueba = 129945825;
    console.log(`utilizando funcion con String la suma es: ${sumarDigitosUsandoString(numeroPrueba)}`);
    console.log(`utilizando funcion con módulo la suma es: ${sumarDigitosUsandoModulo(numeroPrueba)}`);
}

function algoritmo18(){
  /*Desafío de programación #18: Imprimir los primeros 100 números primos */
  let contador = 1;
  const DETENERSE = 100;
  let numeroEntero = 1;
  while(contador<=DETENERSE) {
    let esPrimo = verificarNumeroPrimo(numeroEntero);
    if(esPrimo){
      console.log(`Numero primo #${contador}: ${numeroEntero}`);
      contador++;
    }
    numeroEntero++;

  }
}

function algoritmo19(){
  /* Desafío #19: Crear una función que retorne un array con los primeros números "n-primos" 
  mayores que un número particular definido "alComienzo"
  Ejemplo: Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]*/
  function primerosNumerosPrimosMayoresA(cantidad, inicio){
    const alComienzo = inicio;
    let contador = 0;
    let entero = alComienzo + 1;
    let numeros = [];
    while(contador < cantidad){
      let esPrimo = verificarNumeroPrimo(entero);
      if (esPrimo){
        numeros.push(entero);
        contador++;
      }
    entero++;
    } 
    return numeros;
  }

  const cantidadEnteros = 7;
  const mayoresA = 20;
  console.log(`Los primeros ${cantidadEnteros} primos mayores a ${mayoresA} son ${
    primerosNumerosPrimosMayoresA(cantidadEnteros,mayoresA)}`);
}


algoritmo19();


/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/



 
/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1

 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99

Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63

Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1

Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y 
menores que 30

Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

Desafío de programación #10: Calcula la suma de todos los números en un array de números

Desafío de programación #11: Calcula el promedio de todos los números en un array de números. 
(en una función)

Desafío de programación #12: Crea una función que reciba un array de números y 
devuelva un array conteniendo solo los números positivos

Desafío de programación #13: Find the maximum number in an array of numbers

Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Desafío de programación #15: Crear una función que encuentre el número n de 
Fibonacci usando recursión

Desafío de programación #16: Crear una función que dado un número retorne un 
Boolean (true/false) dependiendo si es primo o no.

Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10

Desafío de programación #18: Imprimir los primeros 100 números primos

Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]

Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]

Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"

Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */



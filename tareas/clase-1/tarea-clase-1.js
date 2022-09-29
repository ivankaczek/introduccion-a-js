// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

//alert('hola');




function calcularEdad(anioActual, anioNacimiento){
    return anioActual - anioNacimiento;
}

let anioActual = prompt('En que anio nos encontramos?','2022');;
let anioNacimiento = prompt('En que anio naciste?', '1985');

let miEdad = calcularEdad(anioActual,anioNacimiento);

function mostrarEdad(edad){
    console.log('Tu edad es ' + edad);
}

mostrarEdad(miEdad);





// mostrarEdad(calcularEdad);
//console.log(calcularEdad(anioActual,anioNacimiento));

/*
function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}

const anioActual = Number(prompt("Cuál es el año actual?"));
const anioNacimiento = Number(prompt("En qué año naciste?"));

console.log('Tenés ' + calcularEdad(anioActual, anioNacimiento) + ' años');
*/


// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.




let salarioAnual = Number(prompt('por favor indique su salario anual'));

function calcularSalarioMensual(salarioAnual){
    let cantMesesAnio = 12;
    return salarioAnual/cantMesesAnio;
}

let salarioMensusal = calcularSalarioMensual(salarioAnual);
console.log(salarioMensusal);

function mostrarSalarioMensual(salarioMensual){
        console.log('Tu salario mensual calculado a partir de tu salario anual es ' + salarioMensual);
}

mostrarSalarioMensual(salarioMensusal);







/*

function calcularSalarioAnual(salarioMensual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    const cantidadSemanasEnUnAnio = 52;
    return salarioAnual / cantidadSemanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    const cantidadDiasEnUnAnio = 365;
    return salarioAnual / cantidadDiasEnUnAnio;
}

const salarioMensual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario anual es ' + calcularSalarioAnual(salarioMensual));

const salarioAnual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario mensual es ' + calcularSalarioMensual(salarioAnual));
console.log('Tu salario semanal es ' + calcularSalarioSemanal(salarioAnual));
console.log('Tu salario diario es ' + calcularSalarioDiario(salarioAnual));


*/

/// SCOPE
/*
console.log(hola);
var hola = "hola buneas!";
*/


/*
tener en cuenta que el programa antes de correr rastrea todas las var y las pone al ppio, por eso si
lo declaramos como 'var' no me da error, aunque me muestra undefined
hacer 'hoisting' significa que 'iza' la variable
'variable hoisting' es el nombre del proceso que hace js
*/

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
*/


//pruebaHoisting();


/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4;       //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF
              // TENER EN CUENTA QUE PASA CUANDO USAMOS *** VAR ***
                    
                //    JavaScript asume que quisiste definir el 'var' afuera del if, 
                //    y que dentro del if solo estas asignando un valor
                //    Es un poco confuso, porque si corro la funcion con c!=2 me debería salir 'indefinido'
                //    Termina sucediendo que e = 5 por 'variable hoisting'
                //    Por todo esto es mejor usar 'let' y no var.
                //    Usando let, termina la funcion, y f queda eliminado, no definido
                //    Entonces 'VAR' entra en el NIVEL SUPERIOR. O sea, estaba en el 'if' ahora paso a la funcion.

            

        

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba como parámetro
                                                    // ya que todavía no está definido
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }


    
    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    //console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error

    
}



prueba(3);
console.log('en esta linea ya estoy afuera de la funcion');


console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
//console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/

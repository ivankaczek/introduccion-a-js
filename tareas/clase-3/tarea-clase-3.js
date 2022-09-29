// TAREA PARA IR MAS PROFUNDO: Repasar clase #4 aprox 1h20 min de video y analizar la funcion recursiva
//  y el uso de los return en la funcion recursiva. 

// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

// tarea2();

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
// ATENCION ABAJO
    // como (null || "") evalua a "", entonces eso te llea a nombre.length === 0
   
function preguntarNombre(){            
    let nombre;
    nombreValido = false;
    do {
        nombre = prompt('Cual es tu nombre?','Coco') || "" ;
        if(nombre.length=== 0) {
            alert("no es un nombre valido");
        } else {
            nombreValido = true;
        }
    } while (!nombreValido);
    return nombre.trim();
}

function evaluarNombre(nombreIngresado){
    const MI_NOMBRE = 'Ivan';
    const MI_HERMANO_SERGIO = 'Sergio';

    if (MI_NOMBRE.toLowerCase() === nombreIngresado.toLowerCase()) {
        alert(`Hola Tocayo, yo tambien me llamo ${MI_NOMBRE}`);
    } else if (MI_HERMANO_SERGIO.toLowerCase() ===  nombreIngresado.toLowerCase()) {
        alert(`Hola ${nombreIngresado}, te llamas igual que mi hermano`);
    } else if (nombreIngresado.trim().length === 0) {
        alert('No ingresaste ningun nombre');
    }  else {
        alert(`Hola ${nombreIngresado}`);
    }
}

function tarea1(){
    const nombreUsuario = preguntarNombre();
    evaluarNombre(nombreUsuario);
}


function preguntarEdad(){
    const edad = Number(prompt('Cual es tu edad?','37'));
    return edad;
}

function compararEdad(edadIngresada){
    const MI_EDAD = 37;

    if (MI_EDAD === edadIngresada) {
        alert(`Che, yo tambien tengo ${MI_EDAD}!`);
    } else if (MI_EDAD > edadIngresada){ 
        alert(`Sos mas joven que yo`); 
    } else if (MI_EDAD < edadIngresada) {
        alert(`Sos mayor que yo`);
    } else {
        alert(`No comprendo la respuesta`);
    }
}

function tarea2(){
    const edadUsuario = preguntarEdad();
    compararEdad(edadUsuario);
}

function preguntarSiTieneDNI(){
    let respuesta;
    respuestaCorrecta = false;
    do {
        respuesta = prompt('Trajo usted su DNI?','Si').toLowerCase();
        if(respuesta === "si" || respuesta === "no"){
            respuestaCorrecta = true;
        } else {
            alert("eso no parece ser una respuesta...");
        }
    } while (!respuestaCorrecta);
    return respuesta;
}

function evaluarEntradaBar(){
    const tieneDni = preguntarSiTieneDNI();
    const EDAD_MINIMA = 18;
    if (tieneDni === "si"){
        const EDAD_PERSONA = preguntarEdad();
        if(EDAD_MINIMA <= EDAD_PERSONA){
            alert(`Bienvenido al bar!`);
        } else if (EDAD_MINIMA > EDAD_PERSONA) {
            alert(`No está permitido el ingreso de menores a ${EDAD_MINIMA} anios`);
        }
    } else {
        alert(`Perdon, pero no se puede entrar al bar sin documento.`);
    }
}

function tarea3(){
    evaluarEntradaBar();
}

tarea1();
tarea2();
tarea3();


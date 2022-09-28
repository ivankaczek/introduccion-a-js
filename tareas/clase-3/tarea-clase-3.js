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


function preguntarTarea(){
    let opcionValida = false;
    let opcionElegida;
    do {
        opcionElegida = Number(prompt('Elija por favor entre la tarea 1, 2 o 3')); 
        opcionValida = validar123(opcionElegida);
    } while (!opcionValida);
    //alert(`la opcion elegida es ${opcionElegida}`);
    return opcionElegida;
}

function validar123(validarEsto){
    let todoOk = false;
    if(validarEsto!==1 && validarEsto!==2 && validarEsto!==3) {
        console.log('La opcion no es valida. Escoja por favor entre las tareas 1, 2 o 3');
    } else {
        todoOk = true;
    }
    return todoOk;
}





// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function preguntarNombre(){

    // ATENCION ABAJO
    // Necesito poner ||"" de modo que si el usuario presione escape, se evalue la expresion siguiente que es un String vacio
    // de hecho la expresion    
    //                          null || "" 
    //              devuelve 
    //                          ""
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

    // Es buena práctica hacer la comparacion al reves de lo intuitivo para separarlo de una asignacion
    if (MI_NOMBRE.toLowerCase() === nombreIngresado.toLowerCase()) {
        //console.log(`Hola Tocayo, yo tambien me llamo ${nombreIngresado}`);
        alert(`Hola Tocayo, yo tambien me llamo ${MI_NOMBRE}`);
    } else if (MI_HERMANO_SERGIO.toLowerCase() ===  nombreIngresado.toLowerCase()) {
        //console.log(`Hola ${nombreIngresado}, te llamas igual que mi hermano`);
        alert(`Hola ${nombreIngresado}, te llamas igual que mi hermano`);
    } else if (nombreIngresado.trim().length === 0) {
        alert('No ingresaste ningun nombre');
    }  else {
        //console.log(`Hola ${nombreIngresado}`);
        alert(`Hola ${nombreIngresado}`);
    }
}

function tarea1(){
    const nombreUsuario = preguntarNombre();
    evaluarNombre(nombreUsuario);
}

// tarea1();



//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function preguntarEdad(){
    const edad = Number(prompt('Cual es tu edad?','37') || "");
    return edad;
}

function compararEdad(edadIngresada){
    const MI_EDAD = 37;

    if (MI_EDAD === edadIngresada) {
        
        alert(`Che, yo tambien tengo ${MI_EDAD}!`);
    } else if (MI_EDAD > edadIngresada){
         
        alert(`sos mas joven que yo`); 
    } else if (MI_EDAD < edadIngresada) {
        
        alert(`sos mayor que yo`);
    } else {
        alert(`no comprendo la respuesta`);
    }
}

// NaN stands for 'not a number'
// Number("") da cero

function tarea2(){
    const edadUsuario = preguntarEdad();
    compararEdad(edadUsuario);
}

// tarea2();

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

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

// devuelve true o false
function evaluarEdadMayorA(edadRequerida, edadIngresada){
    edadOK = false;
    if (edadIngresada >= edadRequerida){
        edadOK = true;
    }
    return edadOK;
}

function evaluarEntradaAlBar(boolEdadSuficiente) {
    if (boolEdadSuficiente){
        alert('Bienvenido al Bar Picachu!');
    } else {
        alert('Disculpe, pero usted no tiene edad para ingresar al bar');
    }
}

function enLaPuertaDelBar(){
    const tieneDNI = preguntarSiTieneDNI();
    
    if (tieneDNI === "si"){
        console.log(`esto sucede si tienes dni`);
        const edadIngresanteAlBar = preguntarEdad();
        tieneEdadSuficiente = evaluarEdadMayorA(18,edadIngresanteAlBar);
        evaluarEntradaAlBar(tieneEdadSuficiente);
    } else {
        alert(`Perdon, pero no se puede entrar al bar sin documento.`);
    }
}

function tarea3(){
    enLaPuertaDelBar();
}

//tarea3();

function elegirMenu(){
    const opcionElegida = preguntarTarea();
    //console.log(`${preguntarTarea}`)
    if (opcionElegida === 1) {
        tarea1();
    } else if (opcionElegida === 2) {
        tarea2();
    } else if (opcionElegida === 3) {
        tarea3();
    }
}

function hacerTodasLasTareas(){
    tarea1();
    tarea2();
    tarea3();
}

elegirMenu();
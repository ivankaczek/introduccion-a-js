/*
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
*/

// Primero declaro los elementos html con los que voy a trabajar
$campoHoras = document.querySelector('#horas');
$campoMinutos = document.querySelector('#minutos');
$campoSegundos = document.querySelector('#segundos');
$botonAgregar = document.querySelector('#agregar');
$botonCalcular = document.querySelector('#calcular');
$campoMostrarRespuesta = document.querySelector('.resultado');

// declaro variables para contabilizar horas, minutos, segundos
let horasAcumuladas = 0;
let minutosAcumulados = 0;
let segundosAcumulados = 0;
let minutosCorregidos = 0;
let segundosCorregidos = 0;



$botonAgregar.onclick = function(){
    horasAcumuladas += Number($campoHoras.value);
    minutosAcumulados += Number($campoMinutos.value);
    segundosAcumulados += Number($campoSegundos.value);
    //alert(`Agregaste correctamente ${$campoHoras.value} horas ${
    //    $campoMinutos.value} minutos ${$campoSegundos.value} segundos`);
    return false;

}

$botonCalcular.onclick = function(){
    segundosCorregidos = segundosAcumulados%60;
    minutosAcumulados += Math.trunc(segundosAcumulados/60);
    minutosCorregidos = minutosAcumulados%60;
    horasAcumuladas += Math.trunc(minutosAcumulados/60);
    $campoMostrarRespuesta.textContent = `Total acumulado: ${horasAcumuladas} horas ${
        minutosCorregidos} minutos ${segundosCorregidos} segundos`;
    return false;
}
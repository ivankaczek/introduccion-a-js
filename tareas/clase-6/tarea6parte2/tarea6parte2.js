/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para 
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente 
el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

$zonaInputs = document.querySelector('#zona-inputs');
console.log($zonaInputs);
$botonAgregar = document.querySelector('#agregar');
console.log($botonAgregar);
$botonQuitar = document.querySelector('#quitar');
$botonCalcular = document.querySelector('#calcular');
$zonaResultados = document.querySelector('#zona-resultados');
$mayorSueldo = document.querySelector('#mayor-sueldo');
$menorSueldo = document.querySelector('#menor-sueldo');
$promedioSueldoAnual = document.querySelector('#sueldo-anual-promedio');
$promedioSueldoMensual = document.querySelector('#sueldo-mensual-promedio');


$botonAgregar.onclick = function() {
    const $nodoParaAgregar = agregarLabelInput();
    console.log($nodoParaAgregar);
    $zonaInputs.appendChild($nodoParaAgregar);
    mostrarNodo($botonCalcular);
    return false;
}

$botonQuitar.onclick = function(){
    const $primerDatos = document.querySelector('.renglon-input');
    $zonaInputs.removeChild($primerDatos);
    return false;
}

$botonCalcular.onclick = function(){
    const sueldos = generarDatos();
    console.log(`${promedio(sueldos)}`);
    console.log(sueldos);

    const textoMayorSueldo = `${devolverMaximo(sueldos)}`;
    const $nodoMayorSueldo = document.createTextNode(textoMayorSueldo);
    $mayorSueldo.appendChild($nodoMayorSueldo);

    const textoMenorSueldo = `${devolverMinimo(sueldos)}`;
    const $nodoMenorSueldo = document.createTextNode(textoMenorSueldo);
    $menorSueldo.appendChild($nodoMenorSueldo);

    const textoSueldoAnualPromedio = `${promedio(sueldos)}`;
    const $nodoSuedoAnualPromedio = document.createTextNode(textoSueldoAnualPromedio);
    $promedioSueldoAnual.appendChild($nodoSuedoAnualPromedio);

    const textoSueldoMensualPromedio = `${((promedio(sueldos))/12).toFixed(2)}`;
    const $nodoSueldoMensualPromedio = document.createTextNode(textoSueldoMensualPromedio);
    $promedioSueldoMensual.appendChild($nodoSueldoMensualPromedio);


    mostrarNodo($zonaResultados);
    
    return false;
}


/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad 
y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs 
ya creados (investigar cómo en MDN).
*/

// variables con las que voy a trabajar
const cantidadIntegrantes = preguntarCantidadPersonas();
let edades = [];

// elementos HTML con los que voy a trabajar

const $tituloPrincipal = traerTitulo();
const $elementoParaMostrarInputs = document.querySelector('#mostrar-inputs');
const $botonCalcular = document.querySelector('#calcular');
const $elementoParaMostrarResultados = document.querySelector('#mostrar-resultados');
const $elementoMenorEdad = document.querySelector('#menor-edad');
const $elementoMayorEdad = document.querySelector('#mayor-edad');
const $elementoPromedioEdad = document.querySelector('#promedio-edad');

// cambios a los elementos html
$tituloPrincipal.textContent = 'calculos con las edades de las personas';

// agrego en ese espacio que creé para mostrar inputs tantos labels+inputs como personas hay
for(let i=0; i < cantidadIntegrantes; i++){
    let $casilleroParaRellenar = agregarLabelInput();
    $elementoParaMostrarInputs.appendChild($casilleroParaRellenar);
}

// quiero agregar al array de las edades el value de cada input

$botonCalcular.onclick = function() {
    const inputs = document.querySelectorAll('.datos');
    console.log(inputs);
    for(let i= 0; i<inputs.length; i++){
        const valorParaAgregar = Number(inputs[i].value);
        edades.push(valorParaAgregar);
    }
    console.log(edades);
    $textoMenorEdad = document.createTextNode(`${devolverMinimo(edades)}`);
    $elementoMenorEdad.appendChild($textoMenorEdad);

    $textoMayorEdad = document.createTextNode(`${devolverMaximo(edades)}`);
    $elementoMayorEdad.appendChild($textoMayorEdad);

    $textoPromedioEdad = document.createTextNode(`${promedio(edades)}`);
    $elementoPromedioEdad.appendChild($textoPromedioEdad);

    $elementoParaMostrarResultados.className = "";
    
    return false;
}





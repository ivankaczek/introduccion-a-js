
const $botonAgregar = document.querySelector('#agregar');
const $areaParaInputs = document.querySelector('#grupo-inputs');
const $grupoResultados = document.querySelector('#grupo-resultados');
const $botonCalcular = document.querySelector('#calcular');
const $botonRecomenzar = document.querySelector('#recomenzar');

function agregarPersonasAlFormulario(event){
    let cantidad = document.querySelector('#cantidad-personas').value;
    let mensajeErrorCantidadPersonas = validarCantidadPersonas(cantidad);
    if (mensajeErrorCantidadPersonas){
        alert(mensajeErrorCantidadPersonas);
    } else {
        borrarInputsAnteriores();
        crearInputsEdadesPersonas(cantidad);
        mostrarElemento($areaParaInputs);
        mostrarElemento($botonCalcular);
    }
    event.preventDefault();
    return false;
}

function calcularEstadisticas(event){
    let edades = leerInputsEdades();
    mostrarElemento($grupoResultados);
    mostrarMenorEdad(edades);
    mostrarMayorEdad(edades);
    mostrarPromedioEdad(edades);
    mostrarElemento($botonRecomenzar);
    event.preventDefault();
}

function recomenzarLectura(event){
    borrarInputsAnteriores();
    ocultarElemento($grupoResultados);
    ocultarElemento($botonCalcular);
    ocultarElemento($botonRecomenzar);
    document.querySelector('#cantidad-personas').value = 0;
    event.preventDefault();
}

$botonAgregar.onclick = agregarPersonasAlFormulario;
$botonCalcular.onclick = calcularEstadisticas;
$botonRecomenzar.onclick = recomenzarLectura;

function ocultarElemento($boton){
    $boton.className = "oculto";
}

function mostrarElemento($boton){
    $boton.className = "";
}


function mostrarMenorEdad(edades){
    document.querySelector('#menor-edad').textContent = `${devolverMinimo(edades)} anios`;
}

function mostrarMayorEdad(edades){
    document.querySelector('#mayor-edad').textContent = `${devolverMaximo(edades)} anios`;
}

function mostrarPromedioEdad(edades){
    document.querySelector('#promedio-edad').textContent  = `${devolverPromedio(edades)} anios`;
}


function leerInputsEdades(){
    let $edades = document.querySelectorAll('.input-edad');
    let edades = [];
    $edades.forEach(element => {
        const lecturaEdad = Number(element.value);
        if(lecturaEdad < 0) {
            alert(`la edad debe ser mayor a cero. Este dato no se tomará en cuenta`);
            element.style.borderColor = 'red';
        } else if (lecturaEdad > 110) {
            alert(`Es raro que una persona viva más de 110 años. Este dato no se tomará en cuenta`);
            element.style.borderColor = 'red';
        } else {
           edades.push(lecturaEdad); 
        }
        
    });
    return edades;
}

function borrarInputsAnteriores(){
    let $inputsAnteriores = document.querySelectorAll('.renglon');
    if($inputsAnteriores.length !== 0){
        $inputsAnteriores.forEach(element => {
            element.remove();
        });
    }
}


function crearInputsEdadesPersonas(cantidad){
    for (let i = 0; i < cantidad; i++) {
      crearLabelInput($areaParaInputs,(i+1));
      
    }
  }
  
  function crearLabelInput($nodo,indice){
    let $renglon = document.createElement('div');
    $renglon.className = 'renglon';
    let $label = document.createElement('label');
    $label.textContent = `Edad de la persona # ${indice}: `;
    let $inputEdad = document.createElement('input');
    $inputEdad.type = "number";
    $inputEdad.className = "input-edad";
    $renglon.appendChild($label);
    $renglon.appendChild($inputEdad);
    $nodo.appendChild($renglon);
    return false;
  }






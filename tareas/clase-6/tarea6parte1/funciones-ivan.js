function preguntarCantidadPersonas(){
    const pregunta = 'Cuánta gente hay en el grupo familiar?';
    const cantidad = Number(prompt(pregunta));
    return cantidad;
}
/*
function traerElementoConEsteId(id){
    const parametro = `'#${id}'`
    return document.querySelector(parametro);
}
*/

function traerTitulo(){
    return document.querySelector('#titulo');
}

function crearLabel(){
    const $label = document.createElement('label');
    const textoLabel = 'Ingrese la edad de la persona: ';
    $label.textContent = textoLabel;
    return $label;
}

function crearInput(){
    const $input = document.createElement('input');
    $input.placeholder = "edad";
    $input.className = "datos";
    return $input;
}

function agregarLabelInput(){
    const $elementoDiv = document.createElement('div');
    const $labelParaAgregar = crearLabel();
    const $inputParaAgregar = crearInput();
    $elementoDiv.appendChild($labelParaAgregar);
    $elementoDiv.appendChild($inputParaAgregar);
    return $elementoDiv;
}

function promedio(numeros){
    let acumulado = 0;
    for(let i = 0; i<numeros.length ; i++){
      acumulado += numeros[i];
    }
    return (acumulado/numeros.length).toFixed(2);
  }

  function devolverMaximo(numeros){
    let resultado = numeros[0];
    for (let i = 0; i<numeros.length ; i++) {
      if(numeros[i] > resultado){
        resultado = numeros[i];
      }
    }
    return resultado;
}

function devolverMinimo(numeros){
    let resultado = numeros[0];
    for (let i = 0; i<numeros.length ; i++) {
      if(numeros[i] < resultado){
        resultado = numeros[i];
      }
    }
    return resultado;
  }
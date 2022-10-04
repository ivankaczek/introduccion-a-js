function saludar(nombre){
    alert(`hola ${nombre}`);
}

function crearLabel(){
    const $label = document.createElement('label');
    const textoLabel = `Ingrese el sueldo anual de la persona `;
    $label.textContent = textoLabel;
    return $label;
}

function crearInput(){
    const $input = document.createElement('input');
    $input.placeholder = "sueldo";
    $input.className = "datos";
    return $input;
}

function agregarLabelInput(){
    const $elementoDiv = document.createElement('div');
    $elementoDiv.classList = "renglon-input";
    const $labelParaAgregar = crearLabel();
    const $inputParaAgregar = crearInput();
    $elementoDiv.appendChild($labelParaAgregar);
    $elementoDiv.appendChild($inputParaAgregar);
    return $elementoDiv;
}

function generarDatos(){
    const datosHtml = document.querySelectorAll('.datos');
    let datos = [];
    for(let i= 0; i < datosHtml.length ; i++) {
        const valor = Number(datosHtml[i].value);
        datos.push(valor)  ;
    }
    return datos;
}

function mostrarNodo($nodo){
    $nodo.className = "";
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

// puedo codear una función que siempre agarre datos y me devuelva el nodo listo?

/*
function agregarLabelInputEnNodo($nodo){
    $divParaAgregar = agregarLabelInput();

}
*/
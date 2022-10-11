

function validarCantidadPersonas(cantidad){
    if (cantidad < 0) {
      return 'la cantidad de personas debe ser un número entero positivo';
    } else if (cantidad > 100) {
      return 'es muy raro que haya más de 100 personas en tu grupo familiar';
    } else if(cantidad - Math.trunc(cantidad) !== 0) {
      return 'la cantidad debe ser un número entero';
    }
    return "";
}


function devolverPromedio(numeros){
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
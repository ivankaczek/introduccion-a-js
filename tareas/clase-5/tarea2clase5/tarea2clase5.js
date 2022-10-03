/* 
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

*/

// Me traigo los elementos html que necesito

$nodoOLs = document.querySelectorAll('ol');
$nodoULs = document.querySelectorAll('ul');
$elementoPromedio = document.querySelector('#promedio');
$elementoMayor = document.querySelector('#mayor');
$elementoMenor = document.querySelector('#menor');
$elelmentoRepetido = document.querySelector('#mas-repetido');

// creamos y llenamos el array
let numeros = [];

for (let i = 0; i < $nodoOLs.length; i++) {
    const numeroAgregar = Number($nodoOLs[i].textContent);
    numeros.push(numeroAgregar);
    
}

for (let i = 0; i < $nodoULs.length; i++) {
    const numeroAgregar = Number($nodoULs[i].textContent);
    numeros.push(numeroAgregar);
    
}

// ejecutamos la parte lógica

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

function calcularPromedio(arrayEnteros){
    let acumulado = 0;
    for (let i = 0; i < arrayEnteros.length; i++) {
        acumulado += arrayEnteros[i];
    }
    return (acumulado/arrayEnteros.length).toFixed(2);
}

function analizarFrecuencia(numeroAnalizar,numeros){
    // esta funcion devuelve cuantas veces aparece el numero a analizar en el array
    let cantidad = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        if ( numeroAnalizar === numeros[i]) {
            cantidad++
        }
    }
    return cantidad;
}

function encontrarIndiceMayorFrecuencia(numeros){
    let indiceMasFrecuente = 0;
    let frecuenciaMasAlta = 0;
    for (let i = 0; i < numeros.length; i++) {
        const numeroParaAnalizar = numeros[i];
        const frecuenciaDeEseNumero = analizarFrecuencia(numeroParaAnalizar,numeros);
        if(frecuenciaDeEseNumero > frecuenciaMasAlta){
            frecuenciaMasAlta = frecuenciaDeEseNumero;
            indiceMasFrecuente = i;
        }
        
    }
    return indiceMasFrecuente;
}

const indiceConMayorFrecuencia = encontrarIndiceMayorFrecuencia(numeros);


$elementoPromedio.textContent = `El promedio de los números es ${calcularPromedio(numeros)}`;
$elementoMayor.textContent = `El mayor número es ${devolverMaximo(numeros)}`;
$elementoMenor.textContent = `El menor número es ${devolverMinimo(numeros)}`;
$elelmentoRepetido.textContent = `El número más repetido es ${numeros[indiceConMayorFrecuencia]} `;

console.log(numeros);

/*
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Tarea 2 clase 5</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='tarea2clase5.css'>
    
</head>
<body>
    <ol>2</ol>
    <ol>5</ol>
    <ol>6</ol>
    <ol>2</ol>
    <ol>2</ol>
    <ol>2</ol>
    <ol>2</ol>
    <ul>78</ul>
    <ul>1</ul>
    <ul>32</ul>
    <ul>1</ul>
    <ul>2</ul>
    <ul>2</ul>
    <ul>3</ul>
    <ul>1</ul>
    <ul>2</ul>
    <ul>4</ul>



    <script src='tarea2clase5.html'></script>
</body>
</html>
*/
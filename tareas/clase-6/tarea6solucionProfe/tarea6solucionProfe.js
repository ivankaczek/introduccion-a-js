document.querySelector('#siguiente-paso').onclick = function(event){
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    mostrarBotonCalculo();
    // sigue esto???
    //ocultarBotonCalculo();


    event.preventDefault();



}

document.querySelector('#calcular').onclick = function(event){
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor',obtenerMayorNumero(numeros));
    mostrarEdad('menor',obtenerMenorNumero(numeros));
    mostrarEdad('promedio',obtenerPromedio(numeros));
    mostrarResultados();
    event.preventDefault();
}

function borrarIntegrantesAnteriores(){
    // primero se trae todos los que tengan clase integrante
    const $integrantes = document.querySelectorAll('.integrante');
    // y después va borrando uno por uno
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
        
    }
}

function crearIntegrantes(cantidadIntegrantes){

    if(cantidadIntegrantes > 0){
        mostrarBotonCalculo();
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
        
    }

}

function crearIntegrante(indice){
    const $div = document.createElement('div');
    
    // esta la posta, tener un div con clase integrante
    $div.className = "integrante";

    // creamos un label y un input para ese div
    const $label = document.createElement('label');
    $label.textContent = "Edad del integrante #" + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';

    //agregamos al div lo que creamos recien
    $div.appendChild($label);
    $div.appendChild($input);

    // ahora en el nodo integrantes agregamos ese div
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

function resetear(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
}

document.querySelector('#resetear').conclick = resetear();

function mostrarBotonCalculo(){
    document.querySelector('#calcular').className='';
}

function ocultarBotonCalculo(){
    document.querySelector('#calcular').className='oculto';
}

function ocultarResultados(){
    document.querySelector('#analisis').className='oculto';
}

function mostrarResultados(){
    document.querySelector('#analisis').className='';
}

// esto que sigue también es la mega-papa, la papa que papea a todas las papas
// porque te ahorra un montón de líneas de código. O sea selecciona 'justo ese id'
// y le asigna el valor que le pases
function mostrarEdad(tipo,valor){
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}


function obtenerEdadesIntegrantes(){
    // esta línea que viene es clave, porque (.integrante input) significa 'los input adentro de los
    // elementos que tengan clase integrante
    const $integrantes = document.querySelectorAll('.integrante input');
    console.log($integrantes);
    const edades = [];
    for(let i= 0; i < $integrantes.length; i++){
        const $integranteParticular = $integrantes[i];
        const valorEdad = Number($integranteParticular.value);
        edades.push(valorEdad);
    }
    console.log(edades);
    return edades;


}
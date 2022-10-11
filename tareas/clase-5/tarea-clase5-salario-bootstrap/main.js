$botonSaludar = document.querySelector('#saludar');
$areaSaludo = document.querySelector('#saludo');
$primerNombre = document.querySelector('#primer-nombre');
$segundoNombre = document.querySelector('#segundo-nombre');
$apellido = document.querySelector('#apellido');
$edad = document.querySelector('#edad');

function saludarUsuario(event){
    const nombreUsuario = `${$primerNombre.value} ${$segundoNombre.value} ${$apellido.value}`;
    const edadUsuario = Number($edad.value);
    mostrarSaludo(nombreUsuario);
    event.preventDefault();
}

function mostrarSaludo(nombreUsuario,edad){
    $areaSaludo.className = "";
    document.querySelector('#persona').textContent = `Hola ${nombreUsuario}!`
    const comentarioEdad = hacerComentarioAcordeEdad(edad);
    document.querySelector('#comentario-segun-edad').textContent = comentarioEdad;
}



function hacerComentarioAcordeEdad(edad){
    if(edad<18){
        return "Todavía eres menor de edad";
    } else {
        return "Ya eres mayor de edad y puedes entrar a un bar!";
    }
}





$botonSaludar.onclick = saludarUsuario;
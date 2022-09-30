// Nivel 3

function evaluarEdad(edad){
    edad >= 18 ? console.log('Bienvenido al bar!') : console.log('no tenés edad para entrar');
    
}

evaluarEdad(17);

/*
    Introducción
    ============

    Bieeeeen, has llegado lejos en tan poco tiempo!

    Pero todavía tenemos más cosas para vos. Antes de comenzar, abrí index.html, y
    reemplazá nuestro script de nivel2.js al que vamos a utilizar ahora, — nivel3.js.

    TIP: Si querés utilizar multiples archivos .js, simplemente
    agregá más etiquetas <script>.
*/
// console.log('estamos en el nivel 3');

/*
    Hablemos un poco más de HTML, CSS y de como podemos interactuar con ellos
    en JavaScript.


    Hypertext Markup Language (HTML)
    --------------------------------
    Como te habrás dado cuenta, HTML está dividido en elementos que se ven algo así:

    <header></header>
    <p></p>
    <img />

    A estos elementos los llamamos "tags". Cada elemento de la página tiene un tag que abre y otro que
    cierra. (NOTA: Algunos tags, como <img />, no necesitan ser
    cerrados con otro tag.)

    La etiqueta que engloba a todas las demás en un archivo HTML es <html>.

    Dentro de la etiqueta <html> encontrarás un tag <head> y un tag <body>.

    En <head> metemos los metadatos, el título de la página y los links a los
    archivos CSS. La etiqueta <body> contiene nuestro contenido.

    Para una lista completa de las etiquetas HTML, podés mirar esta lista:
    http://htmldog.com/references/html/tags/

    En HTML, los tags pueden contener atributos:
    <div class="opciones"></div>

    Esta etiqueta div contiene un atributo llamado "class", el cual tiene como valor: "opciones".


    Cascading Style Sheets (CSS)
    ----------------------------
    CSS describe como se ven los elementos HTML.

    Los archivos CSS consisten en "bloques de declaración". Cada bloque de
    declaración está compuesto de un "selector" y de un conjunto de reglas de estilo
    visuales. Una declaración se ve así:
    
    [selector] {
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
    }

    Los selectores especifican sobre que elementos son aplicados los
    estilos visuales.

    Los selectores más básicos se refieren a los elementos mediante su nombre de etiqueta,
    se ven algo así:

    body {
      background-color: white;
    }

    Los selectores pueden también referirse a los elementos mediante su atributo
    de "clase", como esto:

    .settings {
      margin: 0;
    }

    o por su ID, así:

    #logo {
      text-align: center;
    }

    La lista de las propiedades de CSS es muy grande, podés leer más acá:
    https://www.w3.org/TR/CSS21/propidx.html

    No te preocupés, no hace falta recordar todo esto ahora mismo!
*/


/*
    Uff, muchas cosas nuevas! Volvamos a JavaScript y veamos como podemos
    interactuar con HTML.
*/


/*
    Elementos de Acceso
    ==================

    Document Object Model (DOM)
    ---------------------------
    El DOM es la representación en JavaScript del elemento HTML que está siendo
    utilizado. EL DOM está disponible bajo una variable global especial llamada
    "document". Podemos obtener nodos específicos (elementos de página) con el
    metodo DOM: '.querySelector'.

    Obtengamos nuestro link de Twitter desde la página.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');

    // Podemos guardar elementos de la página en variables, al igual que como cualquier otro valor!
    // De todas formas, fijate que un elemento de página es un objeto,
    // el cual es un "tipo de referencia", así como los arrays (mirá el nivel 2).
    // Eso quiere decir que se pueden cambiar los atributos y propiedades del elemento,
    // pero no la variable en sí misma. Vas a ver esto en acción ahora mismo.
*/

// console.log(document.querySelector('.twitter'));

// TAREA: Ahora te toca a vos! — Obtené la etiqueta h1 de la página y guardala en una variable
//       variable llamada nuestroTitulo.
//       Utilizá console.log para ver lo que obtuviste!

/*
const etiquetah1 = document.querySelector('h1');
console.log(etiquetah1);
*/


/*
    Obteniendo elementos similares.
    ========================

    También podemos obtener todos los elementos con la misma etiqueta. En nuestro
    pie de página tenemos una lista desordenada (<ul>), con tres elementos de lista (<li>) adentro.
    Obtengamoslos todos con un array de los elementos de la página. Cuando querramos obtener multiples elementos,
    podemos utilizar el método '.querySelectorAll', el cual nos dará una lista con las coincidencias.

    Ejemplo:

    // Esto obtendrá todos los <li> de la página.
    const mediaLinks = document.querySelectorAll('li');
*/

// TAREA: Obtené todos los elementos <li> de la página en una variable llamada mediaLinks.
let mediaLinks = document.querySelectorAll('li');
console.log('sigue el console log de mediaLInks que deberia ser de tipo nodeList');
console.log(mediaLinks);
console.log('sigue un bucle for con los medialinks');
for (let i = 0; i < mediaLinks.length; i++) {
    const element = mediaLinks[i];
    console.log(element);
    
}

console.log('sigue un bucle for con las className de los medialink');
for (let i = 0; i < mediaLinks.length; i++) {
    const element = mediaLinks[i].className;
    console.log(element);
   }

   console.log('sigue un bucle for con las innerText de los medialink');
   for (let i = 0; i < mediaLinks.length; i++) {
       const element = mediaLinks[i].innerText;
       console.log(element);
      }


/*
fijate como lista los elementos en la nodelist como 
    li.website
    
    porque justamente en el index.html estan declarados como <li class="website" ... etc>
*/





// TAREA: Ahora utilizá console.log para ver la cantidad de 
// elementos li que hay con mediaLinks.length
console.log(mediaLinks.length);
console.log(`la cantida de elementos en el array mediaLinks es ${mediaLinks.length}`);
console.log(`el textContext del primer elemento en el array mediaLinks es ${mediaLinks[0].textContent}`);
const segundoMediaLink = mediaLinks[1];
console.log(`si lo pongo primero en una constante y ahora lo llamo con $ seria ${segundoMediaLink}`);
console.log('pero si hago console log del elemnto solo lo muestra diferente');
console.log(segundoMediaLink);




// TAREA: ¿Te acordás de los bucles del nivel 2? Usando lo que sabés de ellos, realizá iteraciones
//      sobre cada item de mediaLinks y mostralos en pantalla con console.log

/*
for (let i = 0; i < mediaLinks.length; i++) {
    console.log(mediaLinks[i]);
    
}
*/



/*
    Propiedades de los elementos
    ==================
    
    Ok, hasta acá todo bien. Peeeroo, ¿que pasa si queremos obtener SOLO el texto
    de nuestra etiqueta 'h1'?
    Los elementos de página tienen una propiedad para esto: '.textContent'.

    Ejemplo:

    nuestroTwitter.textContent;
    // Obtendremos el texto: 'Twitter: @MusesCodeJSSyd @MusesCodeJSMelb @MCJSHobart @MCJSPerth @BrisMuses'.

    textContent me va a dar el contenido del texto y 90% de las veces vamos a utilizar eso
    el innerText devuelve solo el texto que aparece en la pagina, que esta renderizado en la 
    pagina
    O sea, solo los elementos visibles en la pagina

    innerHtml me da un string con todo el codigo html que esta escrito en el elemento
*/


const textoDelElementoClaseTwitter = document.querySelector('.twitter').textContent;
console.log(textoDelElementoClaseTwitter);


// TAREA: Obtené el contenido de nuestro elemento 'h1'
// y utilizá console.log para mostrarlo.

// recordemos que h1 no lleva punto, es un elemento
const tituloH1 = document.querySelector('h1');
console.log('sigue ahora el console log del h1 que como veras tiene bocha de cosas');
//console.log('fijate que cuando haces console log de un elemento de ese elemento se cambia lo que te muestra');
console.log(tituloH1);

/*
let textoDelTitulo = document.querySelector('h1').textContent;
console.log('ahora sigue el texto del titulo'); 
console.log(textoDelTitulo);
*/

let textoTitulo = tituloH1.innerText;


// mira como cambia el titulo a intervalos de 1000 milisegundos (de un segundo) utilizando esta funcion
/*
setInterval(function(){
    tituloH1.innerText = String(Math.random())
},1000);
*/


console.log(`el innerText del elemento anterior es ${textoTitulo}`);
//console.log(textoTitulo);




/*
    Editar el contenido de la página
    ====================

    Podemos simplemente cambiar el contenido de las étiquetas utilizando la propiedad que 
    vimos recién, '.textContent'.

    Ejemplo:

    nuestroTwitter.textContent = '@ButenkoMe';
    console.log(nuestroTwitter.textContent);
    // Adiviná que es lo que vamos a ver en la página y en la consola!
*/

// TAREA: Hagamos un nuevo título! Cambiá el contenido de nuestro 'h1' y ponele lo que quieras.

document.querySelector('h1').innerText = "Titulo cambiado desde JavaScript";

// Este es el verdadero poder de JavaScript usado en el contexto del FrontEnd!!! :)
// Básicamente podemos manipular una página web estática

/*
Una primera tarea que queremos lograr hacer es pedir informacion a través de un formulario
y luego esa información mostrarla  a través de la misma página web 
*/


/*
    Editando atributos
    ==================
    
    También podemos cambiar y establecer atributos en nuestros elementos.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    ourTwitter.id = "sorpresa";

    existe un atributo 'disabled' en los input que hace que no se 
    pueda escribir en un input
*/

const primerElementoConClaseTwitter = document.querySelector('.twitter');
// porque en el html hay un elemento de tipo 'li' que es de class="twitter"
console.log(`El primer elemento que tiene clase twitter citado con $ tanto ... es ${primerElementoConClaseTwitter}`);
console.log('ahora sigue lo mismo pero haciendo console log de ese mismo elemento');
console.log(primerElementoConClaseTwitter);
console.log('ahora sigue el text content de ese elemento');
console.log(primerElementoConClaseTwitter.textContent);
// TAREA: Actualizá el valor del atributo 'src' de nuestra etiqueta 'img' a "img/kittens.jpeg".

const $elementoImg = document.querySelector('img');
//console.log(elemento_img);


// aca esta la ruta del logo de r/ Argentina Programa
//$elementoImg.src = "https://argentinaprograma.com/static/media/logo.671e5d6036da5865e537.jpg";
$elementoImg.src = "img/kittens.jpeg";
const elemento_src_en_img = $elementoImg.querySelector('src');
//console.log(elemento_src_en_img);
const elemento_texto_img = $elementoImg.textContent;
//console.log(elemento_texto_img);




/*
    Editando estilos
    ==============

    Cambiemos algunos estilos. Los elementos de página tienen una propiedad '.style'.
    Podemos asignarle estilos a esta propiedad utilizando los mismos nombres que en
    los archivos CSS.

    (Si una propiedad tiene '-' en su nombre, como — font-size —, entonces
    el guión será eliminado y las siguiente palabra comenzara con una letra mayúscula, y pasará
    a ser fontSize).

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    nuestroTwitter.style.backgroundColor = 'white';
*/

// Tarea: Obtené cualquier elemento de la página y cambiale algunos estilos.

/*
const elemento_h1 = document.querySelector('h1');
elemento_h1.style.backgroundColor = 'red';
elemento_h1.style.color = 'blue';
*/



/*
   Creando nuevos nodos (Elementos)
    =============================

    El objeto "document" también nos da maneras de crear nodos desde cero.

    document.createElement('div'); // crea un nuevo elemento llamado 'div'.
    document.createTextNode('foobar'); // crea un nuevo texto que contiene 'foobar'
    existingNode.appendChild(newNode); // agrega un newNode al final de existingNode.

    Ejemplo:

    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode('Yeeee!');
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);
*/

// ahora almaceno todo el body en el elemnto nodoPagina
const $nodoPagina = document.querySelector('body');
// creo un nuevo elemento con tag p, o sea un <p>
const $nuevoParrafo = document.createElement('p');
// o sea que lo que tengo ahora es <p></p> y esta vacio y esta 'volando' en memoria
// le cambio algunos estilos a ese elemento
$nuevoParrafo.style.fontSize = "20px";
$nuevoParrafo.style.backgroundColor = "pink";
// ahora creo un nodo de texto, un elemento que contiene un texto que por ahora 
//solo esta en memoria, o sea tendre un texto volando
const $nodoTexto = document.createTextNode('Vaaaaamos, estamos aprendiendo a agregar texto en un nodo!');
// al nuevo parrafo le agrego el texto del parrafo, me quedaria <p>texto</p>
$nuevoParrafo.appendChild($nodoTexto);
// a la pagina, o sea a su nodo, le agrego ese parrafo
$nodoPagina.appendChild($nuevoParrafo);

// Tarea: Todavía seguís teniendo a los gatitos en tu pantalla? A mí me gusta el logo y los gatitos.
//       Creá una nueva imagen con nuestro logo como fuente, y ponela
//       en nuestra cabecera.
//
// P.S. También les podés dar estilos al nuevo nodo que creaste.

const $elementoCabecera = document.querySelector('header');
const $nuevaImagen = document.createElement('img');
//$nuevaImagen.src = "https://argentinaprograma.com/static//media/logo.671e5d6036da5865e537.jpg";
$nuevaImagen.src = "img/woman_bw.jpg";
$elementoCabecera.appendChild($nuevaImagen);

// let paisResidencia;
// paisResidencia = prompt('por favor ingrese su país de residencia','Argentina');




/*
const nodoHeader = document.querySelector('header');
const logo_arg_progr = document.createElement('img');
logo_arg_progr.src = "img/logo_argentina_programa.jpg";
nodoHeader.appendChild(logo_arg_progr);
console.log(logo_arg_progr);
*/




// console.log('usted está viviendo en ' + paisResidencia);

// vamos a seleccionar el botón, por ahora el único botón que hay en la página


// normalmente a los elementos de html se les pone el signo pesos adelante par indicar
// que es un elemento html y no una variable comun y silvestre
const $botonIngreso = document.querySelector('#ingresar');
//console.log(botonIngreso);

// vamos a aprender un evento que es el 'onclick', el cual es una PROPIEDAD que espera una función
// Y ahora viene entonces el tema de declarar funciones anónimas
// adentro de ese boton ingreso con la propiedad onclick declaramos una funcion anonima que diga qué
// va a pasar cuando hagamos click adentro de ese boton



$botonIngreso.onclick = function(){
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    let textoResultado;
    //alert(`tu edad es ${edadUsuario}`);
    //alert(`ingresaste como nombre ${nombreUsuario}`);
    if(edadUsuario >= 18) {
        //alert('tenes edad suficiente para ingresar al bar');
        textoResultado = 'podés ingresar al bar';
    } else {
        //alert('no tenes edad suficiente para ingresar a un bar');
        textoResultado = 'no tenés edad como para ingresar al bar';
    }
    document.querySelector('#resultado').innerText = textoResultado;
    return false;
}

/*
Como lo normal para enviar un formulario es que se envien los datos cuando hacemos click
necesitamos poner que la funcion en onclick retorne false para que el formulario no se envie

Lo que está sucediendo ahí arriba es que dado un elemento, en este caso el boton de ingreso, 
le damos un manejo de un evento (un event handler, en este caso que sucede al hacer click, con la 
    propiedad onclick)
    Eso que va a suceder está expresado en una función, que en este caso es agarrar lo que está
    escrito en el elemnto con id edad-usuario, luego hacer distintas verificaciones que ya hemos 
    visto cómo se hacen y eso lo terminamos mostrando en otro elemento que está también en el
    documento html, que en este caso es el div resultado que habíamos dejado vacio

    Después vamos a ver en detalle event bubbling pero por ahora usamos ese return false

*/



/*
si yo estoy diciendo que cuando alguien hace click en el botón entonces yo puedo hacer cosas,
significa que si alguien ingresa su nombre y su edad, yo podría ahora hacer todos los cálculos que 
había escrito antes en código
*/


////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 3 de JavaScript Básico!          //
// Levántate, estira las piernas y celebra tu logro.                      //
// ¡Creo que esto amerita un festejo!                                     //
////////////////////////////////////////////////////////////////////////////

/* ------------------------------------------------------------------
            Document.getElementById
--------------------------------------------------------------------*/
/* Ejemplo1 */
document.getElementById("saludo").innerHTML = "Hello mundo!"; 
 

/* Ejemplo 2 */
let texto = document.getElementById("intro");
document.getElementById("demo").innerHTML = "El texto del párrafo introductorio es: " + texto.innerHTML;


/* Ejemplo 3 */
let cambio = document.getElementById("saludos");
cambio.style.color = "red";




/* ------------------------------------------------------------------
            Document.getElementByClassName
--------------------------------------------------------------------*/
/* Ejemplo 1 */
const  explicacion = document.getElementsByClassName("nota");
document.getElementById("demostra").innerHTML = 
`El primer párrafo (índice 0) con la clase="nota" es: ` + explicacion[0].innerHTML;


/* Ejemplo 2 */
const elementos = document.getElementsByClassName("resaltadoc");
for (let i = 0; i < elementos.length; i++) {
     elementos[i].style.color = "rgb(60, 221, 221";    
}



/* ------------------------------------------------------------------
            Document.getElementsByTagName()
--------------------------------------------------------------------*/
const elementosTag = document.getElementsByTagName("p")
document.getElementById("demoTag").innerHTML =
`El primer párrafo (índice 1) de las etiquetas "p" es: ` + elementosTag[1].innerHTML;

/* Ejemplo 1 */
function cambiarColor() {
    //Selleciona todos los elementos p
    let parrafos = document.getElementsByTagName("p")

    //Recorre todos y cambia su color
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "blue";
    }
}


/* Ejemplo 2 */
let titulos = document.getElementsByTagName("h3");
document.getElementById("resultado").innerHTML = "Hay " + titulos.length + " títulos H3 en la pagina.";


/* Ejemplo 3 */
function cambiarTexto() {
    let items = document.getElementsByTagName("li");
    for(let i = 0; i < items.length; i++) {
        items[i].innerText = "Fruta " + (i+1);
    }
}

/* ------------------------------------------------------------------
            Document.getElementsByName()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
function mostrarSeleccion () {
    //Selecciona los elementos por su atributo name
    let opciones = document.getElementsByName("lenguaje")

    //Recorremos todas las opciones
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            document.getElementById("resultadoName").innerHTML = "seleccionaste: " + opciones[i].value;   
        }
    }
}

/* ------------------------------------------------------------------
            document.querySelector()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#boton")

boton.addEventListener("click", ()=> {
    titulo.textContent = "¡texto cambiando";
});

/* Ejemplo 2 */
const parrafo = document.querySelector(".resaltad")
parrafo.style.color = "yellow"


/* Ejemplo 3 */
const input = document.querySelector("#miInput");
const boton2 = document.querySelector("#btn");
boton2.addEventListener("click",() => {
    alert('El valor del input es: ' + input.value)
});


/* Ejemplo 4 */
const destacado = document.querySelector("li.item.destacado");
destacado.style.backgroundColor = "yellow";


/* ------------------------------------------------------------------
            document.querySelectorAll()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
function cambiarColo() {
    let parrafs = document.querySelectorAll("p");
    parrafs.forEach(function (p) {
        p.style.color = "green";
    });
}

/* Ejemplo 2 */
function marcar() {
    let textos = document.querySelectorAll("#contenedor .texto")
    textos.forEach(function (texto){
        texto.style.border = "1px solid red"
    })
}



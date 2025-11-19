/* ------------------------------------------------------------------
            Document.getElementById
--------------------------------------------------------------------*/
/* Ejemplo1 */
document.getElementById("saludo").innerHTML = "Hola clase"; 
 

/* Ejemplo 2 */
let texto = document.getElementById("intro");
document.getElementById("demo").innerHTML = "El texto del párrafo introductorio es: " + texto.innerHTML;


/* Ejemplo 3 */
let cambio = document.getElementById("saludos");
cambio.style.color = "red";



/* Ejemplo 4   Hover sobre el párrafo*/
let parHover = document.getElementById("por-encima");
parHover.addEventListener("mouseover", function() {
    parHover.style.color = "blue"
});


document.getElementById("btnClick").addEventListener("click", function () {
    document.getElementById("resClick").innerHTML = "Hiciste clic!";
    this.innerHTML = "¡Gracias!"; // cambia el texto del botón
});

document.getElementById("nombre").addEventListener("input", function() {
    document.getElementById("resInput").innerHTML = "Hola " + document.getElementById("nombre").value;
});


/* ------------------------------------------------------------------
            Document.getElementByClassName
--------------------------------------------------------------------*/
/* Ejemplo 1 */
const elementos = document.getElementsByClassName("resaltado");

for (let i = 0; i < elementos.length; i++) {
     elementos[i].style.color = "red";    
}

/* Ejemplo 2 */
const notas = document.getElementsByClassName("nota");

for (let i = 0; i < notas.length; i++) {
     notas[i].textContent = "Texto modificado " + (i + 1);    
}


/* Ejemplo 3 */
const items = document.getElementsByClassName("hoverItem");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "yellow";
    });
    items[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    });
}  



/* ------------------------------------------------------------------
            Document.getElementsByTagName()
--------------------------------------------------------------------*/
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
    //Selecciona loselementos por su atributo name
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



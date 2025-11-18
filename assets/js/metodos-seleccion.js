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




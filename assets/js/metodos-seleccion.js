/* Document.getElementById Ejemplo1 */
document.getElementById("saludo").innerHTML = "Hola clase"; 
 

/* Ejemplo 2 */
let texto = document.getElementById("intro");
document.getElementById("demo").innerHTML = "El texto del párrafo introductorio es: " + texto.innerHTML;


/* Ejemplo 3 */
let cambio = document.getElementById("saludos");
cambio.style.color = "red";



/* Ejemplo 4 */
document.getElementById("por-encima").addEventListener("mouseover", function() {
    document.getElementById("por-encima").style.color = "blue"
});


document.getElementById("btnClick").addEventListener("click", function () {
    document.getElementById("resClick").innerHTML = "Hiciste clic!";
    this.innerHTML = "¡Gracias!"; // cambia el texto del botón
});


/* Ejemplo 5 */





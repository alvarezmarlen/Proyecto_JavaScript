/* ------------------------------------------------------------------
            Document.getElementById
--------------------------------------------------------------------*/
/* Ejemplo1 Puedo ver por consola */
let container = document.getElementById("");
/* console.log(container.innerText);  */    
/* console.log(container.textContent);   */
/* console.log(container.innerHTML);    */


/* let saludar = document.getElementById("saludo").innerHTML = "";
console.log(saludar) 
 */
 

/* Ejemplo 2 */
/* let lengMarcado = document.getElementById("html").style.color = "blue";
console.log(lengMarcado)
 */


/* ------------------------------------------------------------------
            Document.getElementByClassName
--------------------------------------------------------------------*/
/* Ejemplo 1 */
/* let postres = document.getElementsByClassName("dulce");
console.log(postres); */
/* console.log(postres.length); */


/* Ejemplo 2 */
/* let postres1 = document.getElementsByClassName("sal1");
postres1[0].innerHTML = "Chocolate";
console.log(postres1); */


/* ------------------------------------------------------------------
            Document.getElementsByTagName()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
/* let varios = document.getElementsByTagName("p");
console.log(varios); */
/* varios[10].innerHTML = "" */


/* Ejemplo 2 */
/* let listaPizza = document.getElementsByTagName("li"); */
/* console.log("Cantidad de elementos <li> encontrados: ", listaPizza.length) */
/* console.log("El tercer elemento <li> es:", listaPizza[2].textContent); */
/* console.log(listaPizza) */

/* ------------------------------------------------------------------
            document.querySelector()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
/* let aceitunas = document.querySelector(".cebolla");
console.log(aceitunas) */


/* Ejemplo 2 */
/* let primer = document.querySelector(".cebolla#salado");
let segundoEjemplo = document.querySelector(".demo")
segundoEjemplo.innerHTML = primer.innerHTML
console.log(segundoEjemplo) */



/* ------------------------------------------------------------------
            document.querySelectorAll()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
let toppingsHelados = document.querySelectorAll(".topping-naranja.items")
/* console.log(toppingsHelados) */
/* console.log(toppingsHelados [1] )*/
/* toppingsHelados.forEach(function(items) {
    items.style.color = "red"
})  */
console.log(items)



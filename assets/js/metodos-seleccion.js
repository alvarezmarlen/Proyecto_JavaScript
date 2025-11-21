/* ------------------------------------------------------------------
            Document.getElementById
--------------------------------------------------------------------*/
/* Ejemplo1 Puedo ver por consola */
let container = document.getElementById("container");
/* console.log(container.innerText);  */    
/* console.log(container.textContent);   */
/* console.log(container.innerHTML);    */


/* let saludar = document.getElementById("saludo").innerHTML = "Gracias";
console.log(saludar)  */
/* console.log(typeof saludar.innerHTML)  */
 

/* Ejemplo 2 */
let lengMarcado = document.getElementById("html").style.color = "blue";




/* ------------------------------------------------------------------
            Document.getElementByClassName
--------------------------------------------------------------------*/
/* Ejemplo 1 */
let postres = document.getElementsByClassName("dulce");
console.log(postres);
console.log(postres.length);


/* Ejemplo 2 */
/* let postres1 = document.getElementsByClassName("sal1");
postres1[0].innerHTML = "Chocolate";
console.log(postres1); */


/* ------------------------------------------------------------------
            Document.getElementsByTagName()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
/* let varios = document.getElementsByTagName("p");
console.log(varios);
varios[11].innerHTML = "Cine"
 */

/* Ejemplo 2 */
/* let listaPizza = document.getElementsByTagName("li");
console.log("Cantidad de elementos <li> encontrados: ", listaPizza.length)
console.log("El tercer elemento <li> es:", listaPizza[2].textContent);
 */

/* ------------------------------------------------------------------
            document.querySelector()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
/* let aceitunas = document.querySelector(".topping");
console.log(aceitunas) */
/* console.log(typeof aceitunas)
 */
/* Ejemplo 2 */
/* let primer = document.querySelector(".cebolla#salado");
let segundoEjemplo = document.querySelector(".demo")
segundoEjemplo.innerHTML = primer.innerHTML
console.log(segundoEjemplo) */
/* console.log(typeof segundoEjemplo) */


/* let albahaca = document.querySelector("ul li.topping")
console.log(albahaca) */


/* ------------------------------------------------------------------
            document.querySelectorAll()
--------------------------------------------------------------------*/
/* Ejemplo 1 */
/* let toppingsHelados = document.querySelectorAll(".topping-naranja.items")
console.log(toppingsHelados) */
/* console.log(toppingsHelados [1]) */
/* console.log(toppingsHelados.length) */




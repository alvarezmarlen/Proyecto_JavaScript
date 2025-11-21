/* example getAttribute() */
const imagen1 = document.getElementById("imageAtt");
const boton1 = document.getElementById("mostrarSrc");
const info = document.getElementById("info");

boton1.addEventListener("click", function() {
    const ruta = imagen1.getAttribute("src");
    info.textContent = "La imagen está cargando desde: " + ruta;
});

/* setAttribute */
const imagen2 = document.getElementById("imageSet");
const boton2 = document.getElementById("cambiar");

boton2.addEventListener("click", function() {
    imagen2.setAttribute("src", "assets/img/logo.png");
});

/* removeAttribute */
const input = document.getElementById("nombre");
const boton3 = document.getElementById("activar");

boton3.addEventListener("click", function() {
    input.removeAttribute("disabled");
});

/* hasAttribute */
const boton4 = document.getElementById("miBoton");
const verificar1 = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");

verificar1.addEventListener("click", function() {

    if (boton4.hasAttribute("disabled")) {
        mensaje.textContent = "Sí, el botón está deshabilitado.";
    } else {
        mensaje.textContent = "No, el botón no tiene el atributo disabled.";
    }
});

/* addEventListener() */
const boton5 = document.getElementById("boton2");
const mensaje2 = document.getElementById("mensaje2");

boton5.addEventListener("click", function() {
    mensaje2.textContent = "¡Hiciste clic en el botón!";
});

/* add() */
const parrafo = document.getElementById("parrafoAdd");
const btnAdd1 = document.getElementById("btnAdd");

btnAdd1.addEventListener("click", function() {
    parrafo.classList.add("important");
});

/* remove() */
const item = document.getElementById("itemRemove");
const btnRemove = document.getElementById("btnRemove");

btnRemove.addEventListener("click", function() {
    item.classList.remove("tachado");
});

/* toggle() */
const boton9 = document.getElementById("modo");
const caja9 = document.querySelector(".tog-example");

boton9.addEventListener("click", function() {
    caja9.classList.toggle("dark");
});









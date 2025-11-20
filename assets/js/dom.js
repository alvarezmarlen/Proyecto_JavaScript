const Element = document.getElementById("intro");
 document.getElementById("demo").innerHTML =
  "La introduccion es: " + Element.innerHTML;


function getAdd() {
    const num1 = Number(document.getElementById("val1").value)

    const num2 = Number(document.getElementById("val2").value)
    const add = num1 + num2;
    console.log(add);

    document.getElementById("result").innerHTML = "Valor añadido : " + add;

    document.getElementById("result").style.color = "red"
}

let texto = document.getElementById("mensaje").innerText;
  console.log(texto);  // "Hola mundo"

   document.getElementById("titulo").innerText = "Texto modificado";

    // Función para CAMBIAR el contenido usando innerText
        function usarInnerText() {
            const contenedor = document.getElementById('contenedorTexto');
            
            // 🎯 Usando innerText, la etiqueta <b> se trata como texto plano.
            contenedor.innerText = '¡NUEVO CONTENIDO CON innerText! <strong> Esto es un <b>texto sin formato</strong> .';
            
            console.log("innerText aplicado. Solo se muestra texto.");
        }

        // Función para CAMBIAR el contenido usando innerHTML
        function usarInnerHTML() {
            const contenedor = document.getElementById('contenedorHTML');
            
            // 🎯 Usando innerHTML, la etiqueta <b> se interpreta como HTML.
            contenedor.innerHTML = '¡NUEVO CONTENIDO CON innerHTML! Esto es un <strong> texto con formato en negrita </strong> .';
            
            console.log("innerHTML aplicado. La etiqueta <b> fue renderizada.");
        }
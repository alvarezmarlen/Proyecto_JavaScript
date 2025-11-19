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

document.addEventListener("DOMContentLoaded", () => {
    let caja = document.getElementById("caja");
let mensajes = document.querySelectorAll(".mensaje");
let importante = document.querySelector("#importante");

// Mostrar en consola
console.log("Caja:", caja);
console.log("Mensajes:", mensajes);
console.log("Importante:", importante);

// Navegar
console.log("Padre de importante:", importante.parentNode);
console.log("Primer hijo de caja:", caja.firstChild); // puede ser un nodo de texto
console.log("Primer elemento hijo de caja:", caja.firstElementChild); // más seguro
console.log("Siguiente hermano de mensaje[0]:", mensajes[0].nextElementSibling);
  });
  
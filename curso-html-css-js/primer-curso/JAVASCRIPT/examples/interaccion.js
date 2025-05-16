
function cambiarTexto() {
    let p = document.getElementById("parrafo");
    if(p.textContent === 'Este es un párrafo inicial.'){
      p.textContent = "Texto cambiado con JavaScript";
    }else{
      p.textContent = "Este es un párrafo inicial.";

    }
  }

  function alternarClase() {
    let titulo = document.getElementById("titulo");
    titulo.classList.toggle("resaltado");
  }
    let contador = 1;

  function crearElemento() {
    let div = document.getElementById("contenedor");
    let nuevo = document.createElement("p");
    nuevo.textContent = "Elemento nuevo creado dinámicamenteb "+contador;
    div.appendChild(nuevo);
    contador++;
  }

  function eliminarPrimer() {
    let div = document.getElementById("contenedor");
    let hijos = div.getElementsByTagName("p");
    if (hijos.length > 0) {
        div.removeChild(hijos[0]); // Cambia a hijos[0] para eliminar el primer hijo
    }
    }

  function eliminarUltimo() {
    let div = document.getElementById("contenedor");
    let hijos = div.getElementsByTagName("p");
    if (hijos.length > 0) {
      div.removeChild(hijos[hijos.length - 1]);
    }
  }
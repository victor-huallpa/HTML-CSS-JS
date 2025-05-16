const lista = document.getElementById("lista");
const btnNormal = document.getElementById("btnNormal");
const btnFragment = document.getElementById("btnFragment");
const btnTemplate = document.getElementById("btnTemplate");
const template = document.getElementById("itemTemplate");

// Función para limpiar la lista antes de cada prueba
function limpiarLista() {
  lista.innerHTML = "";
}

// Inserción directa al DOM (menos eficiente)
btnNormal.addEventListener("click", () => {
  limpiarLista();
  console.time("Normal");

  for (let i = 1; i <= 1000; i++) {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `Elemento ${i}`;
    lista.appendChild(div);
  }

  console.timeEnd("Normal");
});

// Inserción usando DocumentFragment (más eficiente)
btnFragment.addEventListener("click", () => {
  limpiarLista();
  console.time("Fragment");

  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 1000; i++) {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `Elemento ${i}`;
    fragment.appendChild(div);
  }

  lista.appendChild(fragment);
  console.timeEnd("Fragment");
});

// Inserción usando <template> (estructura predefinida y reusada)
btnTemplate.addEventListener("click", () => {
  limpiarLista();
  console.time("Template");

  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 1000; i++) {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".item").textContent = `Elemento ${i}`;
    fragment.appendChild(clone);
  }

  lista.appendChild(fragment);
  console.timeEnd("Template");
});

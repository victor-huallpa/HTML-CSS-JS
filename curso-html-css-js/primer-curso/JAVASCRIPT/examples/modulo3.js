// Elementos DOM
const formulario = document.getElementById("formulario");
const tareaInput = document.getElementById("tareaInput");
const listaTareas = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

// Mostrar valor en tiempo real
tareaInput.addEventListener("input", function () {
  mensaje.textContent = `Escribiendo: ${tareaInput.value}`;
});

// Validar al perder el foco
tareaInput.addEventListener("blur", function () {
  if (tareaInput.value.trim() === "") {
    tareaInput.classList.add("error");
    mensaje.textContent = "El campo no puede estar vacío.";
  } else {
    tareaInput.classList.remove("error");
    mensaje.textContent = "";
  }
});

// Prevenir envío si el campo está vacío
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Siempre prevenimos el envío

  const texto = tareaInput.value.trim();

  if (texto === "") {
    tareaInput.classList.add("error");
    mensaje.textContent = "Por favor, escribe una tarea.";
    return;
  }

  // Crear nuevo <li> y agregarlo a la lista
  const li = document.createElement("li");
  li.textContent = texto;
  li.classList.add("tarea");
  listaTareas.appendChild(li);

  // Limpiar
  tareaInput.value = "";
  mensaje.textContent = "";
});

// Delegación de eventos para marcar tareas completadas
listaTareas.addEventListener("click", function (e) {
  if (e.target.classList.contains("tarea")) {
    e.target.classList.toggle("completada");
  }
});

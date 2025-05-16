document.getElementById("miFormulario").addEventListener("submit", e => {
    e.preventDefault();
  
    const form = new FormData(e.target);
  
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: form
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById("respuesta").textContent =
          "Servidor recibió: " + data.form.nombre;
      })
      .catch(err => console.error("Error:", err));
  });
  
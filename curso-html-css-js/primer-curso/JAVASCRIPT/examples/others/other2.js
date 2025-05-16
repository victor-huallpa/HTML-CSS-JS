const datos = {
    nombre: "Juan",
    edad: 25
  };
  
  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
    .then(res => res.json())
    .then(data => console.log("Respuesta del servidor:", data));
  
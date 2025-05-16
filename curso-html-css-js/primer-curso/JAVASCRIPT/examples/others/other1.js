fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const lista = document.createElement("ul");
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name + " - " + user.email;
      lista.appendChild(li);
    });
    document.body.appendChild(lista);
  });

const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const closeButton = document.getElementById('closeButton');
const loginSubmit = document.getElementById('loginSubmit');
const logoutButton = document.getElementById('logoutButton'); 
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const userInfo = document.getElementById('userInfo');

const cartContainer = document.querySelector('.cart-container');
const cartItemsList = document.getElementById('cartItems');
const totalInput = document.getElementById('total');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Variable para almacenar el precio total del carrito
let total = 0;

// Función para verificar si el usuario ha iniciado sesión
function isLoggedIn() {
  const username = localStorage.getItem('username');
  return username !== null;
}

// Función para mostrar la información del usuario
function showUserInfo() {
  const username = localStorage.getItem('username');
  userInfo.textContent = `Hello, ${username}!`;
  loginButton.style.display = 'none'; // Ocultar botón de login
  userInfo.style.display = 'block'; // Mostrar información del usuario
  logoutButton.style.display = 'block'; // Mostrar botón de logout
  loginPopup.style.display = 'none'; // Ocultar el popup después de iniciar sesión
}

// Función para cerrar sesión
function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('isLoggedIn');
  loginButton.style.display = 'block'; // Mostrar botón de login
  userInfo.style.display = 'none'; // Ocultar información del usuario
  logoutButton.style.display = 'none'; // Ocultar botón de logout
}

// Verificar si el usuario ya ha iniciado sesión y mostrar su información si es así
if (isLoggedIn()) {
  showUserInfo();
}

loginButton.addEventListener('click', () => {
  loginPopup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

loginSubmit.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username.trim() === '' || password.trim() === '') {
    // Mostrar una alerta si el usuario o la contraseña están vacíos
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Simulación de registro: Almacena el nombre de usuario en el localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('isLoggedIn', true);

  // Mostrar la información del usuario y ocultar el popup después de iniciar sesión
  showUserInfo();
});

logoutButton.addEventListener('click', () => {
  logout();
});

// Función para agregar productos al carrito
function addToCart(productName, productPrice) {
  // Crea un elemento de lista para el producto seleccionado
  const cartItem = document.createElement('li');
  cartItem.innerText = `${productName} - Price: $${productPrice.toFixed(2)}`;
  cartItemsList.appendChild(cartItem);
  
  // Sumar el precio del producto al total del carrito
  total += productPrice;
  // Actualizar el valor del campo de texto del total en el carrito
  totalInput.value = `$${total.toFixed(2)}`;
  
  // Muestra el contenedor del carrito
  cartContainer.style.display = 'block';
}

// Evento para agregar productos al carrito
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    const productPrice = parseFloat(button.parentNode.querySelector('p[data-price]').dataset.price);
    addToCart(productName, productPrice);
  });
});


// Esperamos a que todos los recursos de la página estén cargados
window.addEventListener('load', function () {
  const carousel = document.querySelector('.carousel');
  let translateValue = 0;
  const slideWidth = document.querySelector('.carousel img').clientWidth;

  function nextSlide() {
    translateValue -= slideWidth;
    carousel.style.transform = `translateX(${translateValue}px)`;

    const firstSlide = carousel.querySelector('img:first-child');
    carousel.appendChild(firstSlide);

    translateValue += slideWidth;
    carousel.style.transform = `translateX(${translateValue}px)`;
  }

  setInterval(nextSlide, 3000);

  setTimeout(function () {
    const newProductsTitle = document.querySelector('.new-products-title');
    newProductsTitle.classList.add('show-title');
  }, 3000);
});

const cart = [];

// Función para actualizar el contenido del carrito
function updateCart() {
  cartItemsList.innerHTML = ''; // Limpiamos la lista del carrito

  // Recorremos el array del carrito y agregamos los productos a la lista
  cart.forEach((product, index) => {
    const cartItem = document.createElement('li');
    cartItem.innerText = `${product.name} - Price: $${product.price.toFixed(2)}`;
    cartItem.setAttribute('data-index', index);
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', removeFromCart);
    cartItem.appendChild(removeButton);
    cartItemsList.appendChild(cartItem);
  });

  // Recalculamos el total del carrito
  total = cart.reduce((acc, product) => acc + product.price, 0);
  totalInput.value = `$${total.toFixed(2)}`;

  // Mostramos u ocultamos el contenedor del carrito según sea necesario
  cartContainer.style.display = cart.length > 0 ? 'block' : 'none';
}

// Función para eliminar un producto del carrito
function removeFromCart(event) {
  const indexToRemove = parseInt(event.target.parentNode.getAttribute('data-index'));
  cart.splice(indexToRemove, 1); // Eliminamos el producto del carrito
  updateCart(); // Actualizamos el carrito en la página
}

// Evento para agregar productos al carrito
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    const productPrice = parseFloat(button.parentNode.querySelector('p[data-price]').dataset.price);
    cart.push({ name: productName, price: productPrice });
    updateCart();
  });
});

function redirectToPayPal() {
  const totalAmount = total.toFixed(2); // Convertimos el total a un string con dos decimales
  const paypalURL = `https://www.paypal.com`;
  
  // Redirigimos al usuario a la página de PayPal
  window.location.href = paypalURL;
}

// Añadimos el evento al botón "Comprar"
const buyButton = document.getElementById('buyButton');
buyButton.addEventListener('click', redirectToPayPal);

// Obtener el enlace "Contacto" en el footer
const contactoLink = document.getElementById('contactoLink');
// Obtener el contenedor de información de contacto
const contactInfo = document.getElementById('contactInfo');
// Obtener el botón "Cerrar" del contenedor de información de contacto
const closeContactInfo = document.getElementById('closeContactInfo');

// Mostrar el contenedor de información de contacto al hacer clic en el enlace "Contacto"
contactoLink.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el comportamiento por defecto del enlace
  contactInfo.style.display = 'block';
});

// Ocultar el contenedor de información de contacto al hacer clic en el botón "Cerrar"
closeContactInfo.addEventListener('click', () => {
  contactInfo.style.display = 'none';
});

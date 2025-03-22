const respuestasSaludos = [
    "Hola, soy EcoTe, asistente de ventas de EcotTec, empresa encargada en venta de laptops en diferentes marcas y modelos. ¿En qué puedo ayudarte hoy?",
    "¡Hola! Soy EcoTe, asistente de ventas de EcotTec. ¿En qué puedo asistirte?",
    "Hola, bienvenido. Soy EcoTe, asistente de ventas de EcotTec. ¿Cómo puedo ayudarte?",
    "¡Buenos días! Soy EcoTe, asistente de ventas de EcotTec. ¿Cómo puedo ayudarte?",
    "¡Hola! Soy EcoTe, asistente de ventas de EcotTec. ¿En qué puedo ayudarte hoy?"
];
const respuestasDespedida = [
    "¡Adiós! Si necesitas algo más, no dudes en volver. Estoy aquí para ayudarte.",
    "Hasta luego. Si tienes más consultas, no dudes en regresar.",
    "Nos vemos. Recuerda que siempre puedes contar conmigo para cualquier ayuda que necesites.",
    "¡Hasta luego! Que tengas un buen día.",
    "Adiós, que tengas un día maravilloso."
];
const modelosPorMarca = {
    "hp": ["pavilion", "omen", "spectre"],
    "dell": ["inspiron", "alienware", "latitude", "xps"],
    "lenovo": ["thinkpad", "ideapad", "legion", "yoga"]
};
const modelosInfo = {
    "hp": {
        "pavilion": {
            "precio": "$800 - $1200",
            "ram": "8 GB - 16 GB",
            "procesador": "Intel Core i5 - i7",
            "tarjeta_grafica": "Intel HD Graphics o Nvidia GeForce MX250",
            "pantalla": "14 pulgadas - 15.6 pulgadas",
            "caracteristicas": "Perfecta para uso doméstico y multimedia."
        },
        "omen": {
            "precio": "$1200 - $2500",
            "ram": "16 GB - 32 GB",
            "procesador": "Intel Core i7 - i9",
            "tarjeta_grafica": "Nvidia GeForce GTX o RTX",
            "pantalla": "15.6 pulgadas - 17.3 pulgadas",
            "caracteristicas": "Diseñada para juegos de alto rendimiento y tareas exigentes."
        },
        "spectre": {
            "precio": "$1500 - $3000",
            "ram": "16 GB - 64 GB",
            "procesador": "Intel Core i7 - i9",
            "tarjeta_grafica": "Nvidia GeForce GTX o RTX",
            "pantalla": "13.3 pulgadas - 15.6 pulgadas",
            "caracteristicas": "Elegante y potente, ideal para usuarios profesionales y creativos."
        }
    },
    "dell": {
        "inspiron": {
            "precio": "$700 - $1500",
            "ram": "8 GB - 16 GB",
            "procesador": "Intel Core i3 - i7",
            "tarjeta_grafica": "Intel UHD Graphics o Nvidia GeForce MX130",
            "pantalla": "13.3 pulgadas - 15.6 pulgadas",
            "caracteristicas": "Ideal para tareas diarias y multitarea."
        },
        "alienware": {
            "precio": "$1500 - $4000",
            "ram": "16 GB - 64 GB",
            "procesador": "Intel Core i7 - i9",
            "tarjeta_grafica": "Nvidia GeForce RTX o AMD Radeon RX",
            "pantalla": "15.6 pulgadas - 17.3 pulgadas",
            "caracteristicas": "La mejor opción para jugadores entusiastas y profesionales creativos."
        },
        "latitude": {
            "precio": "$800 - $2000",
            "ram": "8 GB - 32 GB",
            "procesador": "Intel Core i5 - i7",
            "tarjeta_grafica": "Intel UHD Graphics o AMD Radeon",
            "pantalla": "14 pulgadas - 15.6 pulgadas",
            "caracteristicas": "Ideal para profesionales en movimiento y negocios."
        },
        "xps": {
            "precio": "$1000 - $3000",
            "ram": "16 GB - 64 GB",
            "procesador": "Intel Core i7 - i9",
            "tarjeta_grafica": "Nvidia GeForce GTX o RTX",
            "pantalla": "13.3 pulgadas - 15.6 pulgadas",
            "caracteristicas": "Diseñada para usuarios exigentes y creativos."
        },
    },
    "lenovo": {
        "thinkpad": {
            "precio": "$900 - $2000",
            "ram": "8 GB - 32 GB",
            "procesador": "Intel Core i5 - i7",
            "tarjeta_grafica": "Intel UHD Graphics o Nvidia GeForce MX",
            "pantalla": "14 pulgadas - 15.6 pulgadas",
            "caracteristicas": "Diseñada para uso empresarial y productividad."
        },
        "ideapad": {
            "precio": "$500 - $1200",
            "ram": "4 GB - 16 GB",
            "procesador": "Intel Core i3 - i5",
            "tarjeta_grafica": "Intel UHD Graphics o AMD Radeon",
            "pantalla": "13.3 pulgadas - 15.6 pulgadas",
            "caracteristicas": "Ideal para uso doméstico y estudiantil."
        },
        "legion": {
            "precio": "$1000 - $2500",
            "ram": "8 GB - 32 GB",
            "procesador": "Intel Core i5 - i7",
            "tarjeta_grafica": "Nvidia GeForce GTX o RTX",
            "pantalla": "15.6 pulgadas - 17.3 pulgadas",
            "caracteristicas": "Diseñada para juegos y rendimiento de alta gama."
        },
        "yoga": {
            "precio": "$800 - $1500",
            "ram": "8 GB - 16 GB",
            "procesador": "Intel Core i5 - i7",
            "tarjeta_grafica": "Intel UHD Graphics o Nvidia GeForce MX",
            "pantalla": "13.3 pulgadas - 15.6 pulgadas",
            "caracteristicas": "Convertible y versátil, perfecta para usuarios móviles y creativos."
        },
    }
};
function obtenerInfoLaptop(marca, modelo) {
    const marcaLower = marca.toLowerCase();
    const modeloLower = modelo.toLowerCase();
    
    if (modelosPorMarca[marcaLower] && modelosPorMarca[marcaLower].includes(modeloLower)) {
        if (modelosInfo[marcaLower] && modelosInfo[marcaLower][modeloLower]) {
            const info = modelosInfo[marcaLower][modeloLower];
            return `Modelo: ${modelo}<br>Precio: ${info.precio}<br>RAM: ${info.ram}<br>Procesador: ${info.procesador}<br>Tarjeta Gráfica: ${info.tarjeta_grafica}<br>Pantalla: ${info.pantalla}<br>Características: ${info.caracteristicas}`;
        } else {
            return `Lo siento, no tenemos información sobre el modelo ${modelo} de laptop.`;
        }
    } else {
        return `Lo siento, no tenemos información sobre laptops de la marca ${marca} o el modelo ${modelo}.`;
    }
}
function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function speak(message) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message.replace(/<br>/g, " ")); // Eliminar etiquetas <br>
    utterance.lang = 'es-ES';
    utterance.rate = 1; // Velocidad de lectura normal
    utterance.pitch = 1; // Tono normal
    synth.speak(utterance);
}
function displayMessage(type, message) {
    const messagesContainer = document.getElementById("chat-messages");
    const messageElement = document.createElement("p");
    messageElement.classList.add("message", type === "user" ? "user-message" : "bot-message");
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function processUserInput(userInput) {
    displayMessage("user", userInput);
    
    const lowerCaseInput = userInput.toLowerCase();
    let message = "";

    const patterns = [
        { pattern: "hola", response: getRandomResponse(respuestasSaludos) },
        { pattern: "buenos días", response: getRandomResponse(respuestasSaludos) },
        { pattern: "buenas tardes", response: getRandomResponse(respuestasSaludos) },
        { pattern: "buenas noches", response: getRandomResponse(respuestasSaludos) },
        { pattern: "adiós", response: getRandomResponse(respuestasDespedida) },
        { pattern: "laptop hp", response: listarLaptopsMarca("hp") },
        { pattern: "laptop dell", response: listarLaptopsMarca("dell") },
        { pattern: "laptop lenovo", response: listarLaptopsMarca("lenovo") },
        { pattern: "laptops", response: listarProductos() },
        { pattern: "que productos ofreces", response: listarProductos() },
        { pattern: "qué laptops tienes", response: listarProductos() },
        { pattern: "qué laptops vendes", response: listarProductos() },
        { pattern: "laptop", response: listarProductos()},
        { pattern: "productos", response: "¿En qué puedo ayudarte específicamente?" }
    ];
    
    const matchedPattern = patterns.find(({ pattern }) => lowerCaseInput.includes(pattern));

    if (matchedPattern) {
        if (["hp", "dell", "lenovo"].includes(matchedPattern.pattern)) {
            const modelo = userInput.replace(new RegExp(matchedPattern.pattern, "i"), "").trim();
            message = obtenerInfoLaptop(matchedPattern.pattern, modelo);
        } else {
            message = matchedPattern.response;
        }
    } else {
        message = "Lo siento, no entendí tu consulta.";
    }

    displayMessage("bot", message);
    speak(message);
    document.getElementById("user-input").value = "";
}
function listarProductos() {
    let listaProductos = "Ofrecemos las siguientes laptops:<br>";
    for (const marca in modelosPorMarca) {
        listaProductos += `<br>${marca.toUpperCase()}:<br>`;
        modelosPorMarca[marca].forEach(modelo => {
            listaProductos += `- ${modelo}<br>`;
        });
    }
    return listaProductos;
}

document.getElementById("voice-input-button").addEventListener("click", function() {
    const recognition = new SpeechRecognition();
    const statusDiv = document.getElementById("voice-status");
    statusDiv.textContent = "Escuchando...";
    
    recognition.lang = 'es-ES';
    recognition.onresult = function(event) {
        if (event.results.length > 0) {
            const userInput = event.results[0][0].transcript;
            document.getElementById("user-input").value = userInput;
            processUserInput(userInput);
        }
        statusDiv.textContent = "";
    }
    recognition.start();
});

document.getElementById("send-button").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    processUserInput(userInput);
    document.getElementById("user-input").value = "";
});

document.getElementById("user-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        const userInput = event.target.value;
        processUserInput(userInput);
        event.target.value = "";
    }
});

function listarLaptopsMarca(marca) {
    let listaLaptops = `Laptops disponibles de ${marca.toUpperCase()}:<br>`;
    modelosPorMarca[marca].forEach(modelo => {
        listaLaptops += `- ${modelo}<br>`;
    });
    return listaLaptops;
}

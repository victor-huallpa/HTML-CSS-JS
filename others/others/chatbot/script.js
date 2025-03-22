const chatContainer = document.getElementById("chat-container");
const messages = document.getElementById("messages");
const userInput = document.getElementById("user-input");

// Respuestas del chatbot almacenadas en objetos JSON
const responses = {
    greetings: [
        "¡Hola! ¿En qué puedo ayudarte?",
        "¡Hola! ¿Cómo puedo asistirte hoy?",
        "¡Hola! ¿Qué tal estás?",
        "¡Buen día! ¿En qué puedo colaborar?"
    ],
    farewells: [
        "¡Hasta luego! Si necesitas ayuda, aquí estaré.",
        "¡Nos vemos! Que tengas un buen día.",
        "¡Adiós! Espero verte pronto.",
        "¡Hasta luego! Que tengas un buen día."
    ],
    notUnderstood: [
        "Lo siento, no entendí. ¿Podrías repetirlo?",
        "Perdona, no entendí lo que dijiste. ¿Podrías reformular tu pregunta?",
        "No estoy seguro de entender. ¿Podrías explicarlo de otra manera?",
        "No logré captar tu pregunta. ¿Podrías repetirla?"
    ]
};

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== "") {
        displayMessage("user", message);
        userInput.value = "";
        respondToMessage(message);
    }
}

function displayMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender === "bot" ? "bot-message" : "user-message");
    messageElement.innerText = message;
    messages.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function respondToMessage(message) {
    const cleanedMessage = cleanText(message.toLowerCase());
    
    if (cleanedMessage.includes("hola") || cleanedMessage.includes("buenos dias") || cleanedMessage.includes("buenas tardes") || cleanedMessage.includes("buenas noches")) {
        const response = getRandomResponse(responses.greetings);
        displayMessage("bot", response);
        speak(response); // Llamar a la función speak para decir la respuesta en voz
    } else if (cleanedMessage.includes("adios") || cleanedMessage.includes("hasta luego") || cleanedMessage.includes("chao")) {
        const response = getRandomResponse(responses.farewells);
        displayMessage("bot", response);
        speak(response); // Llamar a la función speak para decir la respuesta en voz
    } else {
        const response = getRandomResponse(responses.notUnderstood);
        displayMessage("bot", response);
        speak(response); // Llamar a la función speak para decir la respuesta en voz
    }
}

function speak(message) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance);
}

// Función para obtener una respuesta aleatoria de un array
function getRandomResponse(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Función para limpiar el texto eliminando tildes y convirtiéndolo a minúsculas
function cleanText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function startVoiceInput() {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = 'es-ES';

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        displayMessage("user", transcript);
        respondToMessage(transcript);
    }

    recognition.start();
}

// Agregar event listener para escuchar la tecla Enter en el input de texto
userInput.addEventListener("keypress", function(event) {
    // Verificar si la tecla presionada es Enter
    if (event.key === "Enter") {
        // Llamar a la función sendMessage cuando se presiona Enter
        sendMessage();
    }
});

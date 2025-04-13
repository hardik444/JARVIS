const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.onclick = function() {
    const userMessage = userInput.value;
    appendMessage(userMessage, 'user');
    userInput.value = '';
    simulateJarvisResponse(userMessage);
};

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the latest message
}

function simulateJarvisResponse(userMessage) {
    // Mockup response logic
    let jarvisMessage = "Hey my name is JARVIS built HARDIK to have a conversation with me press the bottom right chat option";
    
    if (userMessage.toLowerCase().includes("hello")) {
        jarvisMessage = "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        jarvisMessage = "I'm just a program, but I'm here to help you!";
    }
    
    setTimeout(() => {
        appendMessage(jarvisMessage, 'jarvis');
    }, 1000); // Simulates delay for response
}

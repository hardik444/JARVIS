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
    let jarvisMessage = "I’m not sure how to respond to that!";
    
    if (userMessage.toLowerCase().includes("hello")) {
        jarvisMessage = "Hey this is Jarvis managed by hardik";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        jarvisMessage = "I'm just a program, but I'm here to help you!";
    }

    setTimeout(() => {
        appendMessage(jarvisMessage, 'jarvis');
    }, 1000); // Simulates delay for response
}

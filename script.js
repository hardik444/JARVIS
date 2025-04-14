const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const dataset = [
    { "question": "What is your name?", "answer": "I am Jarvis, your personal chatbot!" },
    { "question": "How can you help me?", "answer": "I can assist you with various queries and provide information." },
    { "question": "What are your capabilities?", "answer": "I can answer questions, provide suggestions, and much more!" },
    { "question": "What is the weather like?", "answer": "I currently do not have access to real-time data." },
    { "question": "Tell me a joke", "answer": "Why did the scarecrow win an award? Because he was outstanding in his field!" }
];

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

function respondWithDataset(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    let jarvisMessage = "I'm sorry, I don't have an answer for that.";

    // Search for the user's question in the dataset
    for (const item of dataset) {
        if (lowerCaseMessage.includes(item.question.toLowerCase())) {
            jarvisMessage = item.answer;
            break;
        }
    }
    
    setTimeout(() => {
        appendMessage(jarvisMessage, 'jarvis');
    }, 1000); // Simulates delay for response
}

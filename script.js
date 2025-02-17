const texts = ["Web Developer", "UI/UX Designer", "JavaScript Enthusiast", "Tech Innovator"];
let index = 0;
const typewriterText = document.getElementById('typewriter-text-content');
const cursor = document.getElementById('cursor');

// Function to simulate typewriter effect with cursor
function typeWriterEffect(text, i = 0) {
    if (i < text.length) {
        typewriterText.innerHTML += text.charAt(i);
        setTimeout(() => typeWriterEffect(text, i + 1), 100); // Speed of typing
    } else {
        setTimeout(() => deleteText(text), 1000); // Wait before deleting the text
    }
}

// Function to delete the text
function deleteText(text) {
    let i = text.length;
    const interval = setInterval(() => {
        if (i > 0) {
            typewriterText.innerHTML = text.slice(0, i - 1);
            i--;
        } else {
            clearInterval(interval);
            setTimeout(() => nextText(), 500); // Delay before moving to the next text
        }
    }, 50); // Speed of deleting
}

// Function to go to the next text
function nextText() {
    typewriterText.innerHTML = '';
    typeWriterEffect(texts[index]);
    index = (index + 1) % texts.length; // Cycle through texts
}

// Start the animation
nextText();



const chatbotMessages = [
    "Hello! How can I assist you today?",
    "I can help with technical questions, web development, or just chat!",
    "Feel free to ask me anything."
];

let chatIndex = 0;
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const closeChatBtn = document.getElementById('close-chat');
const clearChatBtn = document.getElementById('clear-chat');
const chatToggleBtn = document.getElementById('chat-toggle');
const chatbotSection = document.getElementById('chatbot');

// Function to display the chatbot's messages
function displayChatMessage(message, sender = 'bot') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'bot' ? 'bg-[#24283b]' : 'bg-[#bb9af7]', 'text-white', 'rounded-lg', 'p-2', 'my-2', 'max-w-xs', sender === 'bot' ? 'ml-4' : 'mr-4');
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send user input and receive bot response
function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        displayChatMessage(message, 'user');
        userInput.value = '';
        setTimeout(() => {
            if (chatIndex < chatbotMessages.length) {
                displayChatMessage(chatbotMessages[chatIndex]);
                chatIndex++;
            } else {
                displayChatMessage("Sorry, I'm out of responses. Ask something else!", 'bot');
            }
        }, 1000);
    }
}

// Trigger message on clicking send button
sendBtn.addEventListener('click', sendMessage);

// Trigger message on pressing Enter
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Close chatbot interface
closeChatBtn.addEventListener('click', () => {
    chatbotSection.style.display = 'none';
});

// Toggle chatbot visibility
chatToggleBtn.addEventListener('click', () => {
    if (chatbotSection.style.display === 'none' || chatbotSection.style.display === '') {
        chatbotSection.style.display = 'block';
    } else {
        chatbotSection.style.display = 'none';
    }
});

// Clear chat history
clearChatBtn.addEventListener('click', () => {
    chatBox.innerHTML = ''; // Clear the chat messages
    displayChatMessage("Chat history cleared!", 'bot'); // Optional: Add a bot response when cleared
});

// Display initial bot message
displayChatMessage(chatbotMessages[chatIndex]);
chatIndex++;

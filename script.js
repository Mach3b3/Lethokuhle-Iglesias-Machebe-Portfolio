    // Add event listener to the form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Collect data from the form
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Construct the mailto link
        const mailtoLink = `mailto:lethumachebe@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(fullName)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AMessage: ${encodeURIComponent(message)}`;

        // Redirect to the mailto link
        window.location.href = mailtoLink;
});


const texts = [
    "Web Developer",
    "Full-Stack Developer",
    "React Enthusiast",
    "Flutter Developer",
    "Tech Innovator",
    "Problem Solver"
];
    
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

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
}

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

const OPENAI_API_KEY = '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'; // Replace with your OpenAI API Key

// Function to display the chatbot's messages
function displayChatMessage(message, sender = 'bot') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'bot' ? 'bg-[#24283b]' : 'bg-[#bb9af7]', 'text-white', 'rounded-lg', 'p-2', 'my-2', 'max-w-xs', sender === 'bot' ? 'ml-4' : 'mr-4');
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send user input and receive bot response
async function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        displayChatMessage(message, 'user');
        userInput.value = '';
        
        // Get response from GPT-3
        const response = await getGPT3Response(message);

        setTimeout(() => {
            displayChatMessage(response);
        }, 1000);
    }
}

// Function to get response from OpenAI GPT-3.5 API
async function getGPT3Response(userMessage) {
    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",  // Chat model
                messages: [
                    { role: 'system', content: "You are a helpful assistant." },  // System message
                    { role: 'user', content: userMessage }  // User message
                ],
                max_tokens: 150,
                temperature: 0.7,
            })
        });

        const data = await res.json();
        console.log(data);  // Log the response for debugging

        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content.trim();
        } else {
            return "Sorry, I couldn't understand that. Try again!";
        }
    } catch (error) {
        console.error('Error with GPT-3 API:', error);
        return 'Something went wrong. Please try again later.';
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

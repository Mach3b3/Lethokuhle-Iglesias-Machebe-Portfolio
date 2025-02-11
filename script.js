// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'C# Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Function to display current date and time
function updateDateTime() {
    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    const currentDate = new Date();
    
    // Format the date
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    // Format the time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    const formattedTime = `${String((hours % 12) || 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

    // Display date and time
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Update every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();

// Chatbot Toggle functionality
const chatbot = document.getElementById('chatbot');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotClear = document.getElementById('chatbot-clear');
const chatbotBody = document.getElementById('chatbot-body');

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
    // If the chatbot is hidden, show it and hide the toggle button
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'block';
    } else {
        chatbot.style.display = 'none';
    }
});

// Close chatbot
chatbotClose.addEventListener('click', () => {
    chatbot.style.display = 'none'; // Hide the chatbot
});

// Clear the chat
chatbotClear.addEventListener('click', () => {
    chatbotBody.innerHTML = '<p>Hi! How can I help you today?</p>'; // Reset chat content
});

// Optional: Send message functionality (implementing the send button)
const chatbotSend = document.getElementById('chatbot-send');
const chatbotText = document.getElementById('chatbot-text');

chatbotSend.addEventListener('click', () => {
    const message = chatbotText.value.trim();
    if (message) {
        const userMessage = document.createElement('p');
        userMessage.textContent = `You: ${message}`;
        chatbotBody.appendChild(userMessage);
        chatbotText.value = ''; // Clear the input field
        chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to the latest message
    }
});


// Contact Form (EmailJS)
function sendEmail(event) {
    event.preventDefault();

    emailjs.send("service_xxxxxx", "template_xxxxxx", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobnum: document.getElementById("mobnum").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        alert("Message Sent Successfully!");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
}

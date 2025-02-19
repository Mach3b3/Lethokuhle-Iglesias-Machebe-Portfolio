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


const chatBox = document.querySelector("#chat-box");
const userInput = document.querySelector("#user-input");
const sendButton = document.querySelector("#send-btn");
const closeChatButton = document.querySelector("#close-chat");
const chatToggleButton = document.querySelector("#chat-toggle");

const dialogResponses = {
    // Greeting variations
    "hello": "Hello! How can I assist you today?",
    "hi": "Hello! How can I assist you today?",
    "hy": "Hello! How can I assist you today?",
    "hey": "Hello! How can I assist you today?",
    
    // How are you
    "how are you": "I'm just a bot, but I'm here to help you!",
    "how's it going": "I'm just a bot, but I'm here to help you!",
    "how are you doing": "I'm just a bot, but I'm here to help you!",

    // Experience
    "experience": "Here's my experience: <br> 1. Former lab assistant at Central University of Technology <br> 2. Full-stack trainee at UVU Africa, learning HTML, CSS, JavaScript, React, Python, and Android <br> 3. Samsung Innovation Campus Graduate in Machine Learning, Artificial Intelligence, and IoT <br> 4. App developer with a focus on building apps using Flutter, and experience with setting up servers using Hyper-V, Linux, and Windows.",
    "what's your experience": "Here's my experience: <br> 1. Former lab assistant at Central University of Technology <br> 2. Full-stack trainee at UVU Africa, learning HTML, CSS, JavaScript, React, Python, and Android <br> 3. Samsung Innovation Campus Graduate in Machine Learning, Artificial Intelligence, and IoT <br> 4. App developer with a focus on building apps using Flutter, and experience with setting up servers using Hyper-V, Linux, and Windows.",
    "experience details": "Here's my experience: <br> 1. Former lab assistant at Central University of Technology <br> 2. Full-stack trainee at UVU Africa, learning HTML, CSS, JavaScript, React, Python, and Android <br> 3. Samsung Innovation Campus Graduate in Machine Learning, Artificial Intelligence, and IoT <br> 4. App developer with a focus on building apps using Flutter, and experience with setting up servers using Hyper-V, Linux, and Windows.",
    
    // Skills
    "skills": "I excel in Python, SQL, Pandas, Power BI, Matplotlib, Flutter, and full-stack development. I also have experience in setting up servers, data analysis, and application development.",
    "what are your skills": "I excel in Python, SQL, Pandas, Power BI, Matplotlib, Flutter, and full-stack development. I also have experience in setting up servers, data analysis, and application development.",
    
    // Contact information
    "contact": "You can email me at lethumachebe@gmail.com or call me at +27 060 653 5664.",
    "how can I contact you": "You can email me at lethumachebe@gmail.com or call me at +27 060 653 5664.",
    
    // Services
    "services": "I specialize in creating dynamic applications, building data-driven solutions, and offering full-stack development services. I enjoy building innovative apps and providing tech solutions using modern technologies like Flutter, Python, and SQL.",
    "what services do you offer": "I specialize in creating dynamic applications, building data-driven solutions, and offering full-stack development services. I enjoy building innovative apps and providing tech solutions using modern technologies like Flutter, Python, and SQL.",
    
    // Education
    "education": "I graduated with a Diploma in IT from Central University of Technology, and I completed my advanced diploma last year. I am currently pursuing my honors degree in IT.",
    "what's your education": "I graduated with a Diploma in IT from Central University of Technology, and I completed my advanced diploma last year. I am currently pursuing my honors degree in IT.",
    
    // About me
    "about": "I'm Lethokuhle Iglesias Machebe, a passionate developer and tech enthusiast with a focus on full-stack development, machine learning, and data analysis. I have a strong foundation in IT, and I love solving problems through code. My experience includes working as a lab assistant, a full-stack trainee, and building impactful solutions as part of various projects, including my portfolio and the BOOKConnect app. I believe in the power of innovation and constantly seek to grow and learn in the tech world.",
    "who are you": "I'm Lethokuhle Iglesias Machebe, a passionate developer and tech enthusiast with a focus on full-stack development, machine learning, and data analysis. I have a strong foundation in IT, and I love solving problems through code. My experience includes working as a lab assistant, a full-stack trainee, and building impactful solutions as part of various projects, including my portfolio and the BOOKConnect app. I believe in the power of innovation and constantly seek to grow and learn in the tech world.",
    
    // Location
    "where are you located?": "I am based in Mpumalanga, Nkomazi to be Precise, South Africa.",
    "where do you live":  "I am based in Mpumalanga, Nkomazi to be Precise, South Africa.",
    
    // Profile
    "profile": "Welcome to my portfolio website! It showcases my work and skills in software development, data analysis, and app development, including my projects in Flutter and server management. Feel free to explore my projects and get in touch with me!",
    
    // Socials
    "socials": "You can connect with me on social media! Follow me on Twitter (@Lethokuhle_mac) or check out my projects on GitHub (Mach3b3).",
    
    // Hobbies and Interests
    "hobbies": "In my free time, I enjoy exploring new technologies, learning about AI and machine learning, experimenting with app development, and staying up to date with tech trends. I also like reading books and staying active through sports.",
    "what do you do for fun": "In my free time, I enjoy exploring new technologies, learning about AI and machine learning, experimenting with app development, and staying up to date with tech trends. I also like reading books and staying active through sports.",
    
    // Projects
    "projects": "I have worked on several projects, including my portfolio website and the BOOKConnect app. Some of my other projects include a data analysis tool for student performance and a Flutter-based to-do list app. Feel free to check out my GitHub for more projects!",
    
    // Tech Interests
    "tech interests": "I am particularly interested in Machine Learning, Artificial Intelligence, IoT, Full-Stack Development, and Flutter. I am passionate about how technology can solve real-world problems and how emerging technologies can shape the future of development.",
    
    // Future Goals
    "future goals": "My future goals include advancing my skills in machine learning and AI, improving my full-stack development abilities, and building scalable, data-driven applications. I also aim to collaborate with like-minded developers and contribute to impactful open-source projects.",
    
    // Motivation
    "motivation": "My motivation comes from the desire to learn and create impactful solutions. I believe in continuous improvement and staying adaptable to the rapidly evolving tech industry. Every challenge I face is an opportunity to grow."
};


const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
};

const generateBotResponse = async (userMessage) => {
    let botResponse = dialogResponses[userMessage.toLowerCase()] || "I'm sorry, I couldn't understand that. Can you please rephrase?";
    return botResponse;
};

const toggleChatbot = () => {
    const chatbotSection = document.querySelector("#chatbot");
    chatbotSection.classList.toggle("hidden");
};

const clearChatHistory = () => {
    chatBox.innerHTML = "";  // Clear the chat messages
};

sendButton.addEventListener("click", async () => {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    const userMessageDiv = createMessageElement(userMessage, "user-message");
    chatBox.appendChild(userMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    userInput.value = "";

    const botResponse = await generateBotResponse(userMessage);
    const incomingMessageDiv = createMessageElement(botResponse, "bot-message");
    chatBox.appendChild(incomingMessageDiv);
    chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
});

chatToggleButton.addEventListener("click", toggleChatbot);
closeChatButton.addEventListener("click", () => {
    document.querySelector("#chatbot").classList.add("hidden");
    clearChatHistory();  // Clear the chat history when closing the chat
});



// // Initialize OpenAI
// const openai = new OpenAI({
//     apiKey: '',
//     dangerouslyAllowBrowser: true
// });

// // DOM Elements
// const chatBox = document.querySelector("#chat-box");
// const userInput = document.querySelector("#user-input");
// const sendButton = document.querySelector("#send-btn");
// const closeChatButton = document.querySelector("#close-chat");
// const chatToggleButton = document.querySelector("#chat-toggle");
// const chatIcon = document.querySelector("#chat-icon");

// // Predefined responses for fallback
// const dialogResponses = {
//     "hello": "Hello! How can I assist you today?",
//     "how are you": "I'm just a bot, but I'm here to help you!",
//     "experience": "Here's my experience: <br> 1. Former lab assistant at Central University of Technology <br> 2. Full-stack trainee at UVU Africa, learning HTML, CSS, JavaScript, React, Python, and Android <br> 3. Samsung Innovation Campus Graduate in Machine Learning, Artificial Intelligence, and IoT <br> 4. App developer with a focus on building apps using Flutter, and experience with setting up servers using Hyper-V, Linux, and Windows.",
//     "skills": "I excel in Python, SQL, Pandas, Power BI, Matplotlib, Flutter, and full-stack development. I also have experience in setting up servers, data analysis, and application development.",
//     "contact": "You can email me at lethumachebe@gmail.com or call me at +27 060 653 5664.",
//     "services": "I specialize in creating dynamic applications, building data-driven solutions, and offering full-stack development services. I enjoy building innovative apps and providing tech solutions using modern technologies like Flutter, Python, and SQL.",
//     "education": "I graduated with a Diploma in IT from Central University of Technology, and I completed my advanced diploma last year. I am currently pursuing my honors degree in IT.",
//     "about": "I'm Lethokuhle Iglesias Machebe, a passionate developer and tech enthusiast with a focus on full-stack development, machine learning, and data analysis. I have a strong foundation in IT, and I love solving problems through code. My experience includes working as a lab assistant, a full-stack trainee, and building impactful solutions as part of various projects, including my portfolio and the BOOKConnect app. I believe in the power of innovation and constantly seek to grow and learn in the tech world.",
//     "where are you located?": "I am based in Emalahleni Local Municipality, South Africa.",
//     "profile": "Welcome to my portfolio website! It showcases my work and skills in software development, data analysis, and app development, including my projects in Flutter and server management. Feel free to explore my projects and get in touch with me!",
//     "socials": "You can connect with me on social media! Follow me on Twitter (@Lethokuhle_mac) or check out my projects on GitHub (Mach3b3)."
// };

// // Create message element
// const createMessageElement = (content, ...classes) => {
//     const div = document.createElement("div");
//     div.classList.add("message", ...classes);
//     div.innerHTML = content;
//     return div;
// };

// // Generate bot response using OpenAI
// const generateBotResponse = async (userMessage) => {
//     let botResponse = dialogResponses[userMessage.toLowerCase()] || "I'm sorry, I couldn't understand that. Can you please rephrase?";
//     try {
//         const completion = await openai.chat.completions.create({
//             messages: [
//                 { role: "system", content: "You are a helpful assistant named Alexis. Keep responses concise and professional." },
//                 { role: "user", content: userMessage }
//             ],
//             model: "gpt-3.5-turbo",
//             temperature: 0.7,
//             max_tokens: 150
//         });

//         botResponse = completion.choices[0].message.content;
//     } catch (error) {
//         console.error("OpenAI Error:", error);
//         botResponse = "I'm having trouble connecting to the server. Please try again later.";
//     }
//     return botResponse;
// };

// // Toggle chat visibility and change icon
// const toggleChatbot = () => {
//     const chatbotSection = document.querySelector("#chatbot");
//     chatbotSection.classList.toggle("hidden");

//     // Toggle the chat icon
//     if (chatbotSection.classList.contains("hidden")) {
//         chatIcon.classList.remove("fa-times");
//         chatIcon.classList.add("fa-comments");
//     } else {
//         chatIcon.classList.remove("fa-comments");
//         chatIcon.classList.add("fa-times");
//     }
// };

// // Clear chat history
// const clearChatHistory = () => {
//     chatBox.innerHTML = "";
// };

// // Event listeners
// sendButton.addEventListener("click", async () => {
//     const userMessage = userInput.value;
//     if (userMessage.trim() === "") return;

//     const userMessageDiv = createMessageElement(userMessage, "user-message");
//     chatBox.appendChild(userMessageDiv);
//     chatBox.scrollTop = chatBox.scrollHeight;
//     userInput.value = "";

//     const botResponse = await generateBotResponse(userMessage);
//     const incomingMessageDiv = createMessageElement(botResponse, "bot-message");
//     chatBox.appendChild(incomingMessageDiv);
//     chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
// });

// chatToggleButton.addEventListener("click", toggleChatbot);
// closeChatButton.addEventListener("click", () => {
//     document.querySelector("#chatbot").classList.add("hidden");
//     clearChatHistory();
// });


/*----typed js-----*/ 
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
    
    const formattedTime = `${(hours % 12) || 12}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${ampm}`;

    // Display date and time
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Update every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();

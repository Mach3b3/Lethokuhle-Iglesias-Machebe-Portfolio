document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    // Toggle the navbar visibility on menu icon click
    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});

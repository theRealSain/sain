// Select all section elements and navigation links
const sections = document.querySelectorAll("header, section");
const navLinks = document.querySelectorAll(".nav-link");

// Observer callback to handle active link updates
const observerCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Get the id of the section currently in the viewport
            const id = entry.target.id;

            // Remove active class from all links
            navLinks.forEach((link) => link.classList.remove("text-indigo-400"));

            // Add active class to the current link
            const activeLink = document.querySelector(`.nav-link[data-link="${id}"]`);
            if (activeLink) {
                activeLink.classList.add("text-indigo-400");
            }
        }
    });
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, {
    root: null, // Observe within the viewport
    threshold: 0.5, // Trigger when 50% of the section is visible
});

// Observe all sections, including the header for Home
sections.forEach((section) => observer.observe(section));





document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebarLinks = document.querySelectorAll("#sidebar a");

    // Open sidebar when hamburger is clicked
    hamburger.addEventListener("click", () => {
        sidebar.style.display = "block"; // Show the sidebar
    });

    // Close sidebar when close button is clicked
    closeSidebar.addEventListener("click", () => {
        sidebar.style.display = "none"; // Hide the sidebar                    
    });

    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.style.display = "none"; // Hide the sidebar
        });
    });
});

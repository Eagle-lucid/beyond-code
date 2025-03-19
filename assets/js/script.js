document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for Navigation
    const navLinks = document.querySelectorAll(".nav-list a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
              e.preventDefault()// Prevent default anchor behavior

              // Remove active class from all links 

            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add active class to clicked links 
            this.classList.add("active"); 

            // Smooth Scroll
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({behavior: "smooth" });

            };
        });
    });
            
    // Smooth Scrolling for "Explore More" Button
    document.getElementById("explore-btn").addEventListener("click", () => {
        document.getElementById("blog").scrollIntoView({behavior: "smooth" });
    });
    // Smooth Scrolling for "Rise to the Top"
    document.getElementById("scroll-top").addEventListener("click", () => {
        document.documentElement.scrollIntoView({behavior: "smooth" });
    });
    // Auto-Update Year in Footer
    document.getElementById("year").textContent = new Date().getFullYear();
});
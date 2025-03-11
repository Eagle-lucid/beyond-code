document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle");
    const burgerIcon = document.getElementById("burger-icon");
    const closeIcon = document.getElementById("close-icon");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Collapsed by default when the page loads 
    sidebar.classList.add("collapsed");
    closeIcon.style.display = "none"; // Hide close icon initially

    // Sidebar Toggle (Open/Close)
    toggleBtn.addEventListener("click", () => {
        const isCollapsed = sidebar.classList.contains("collapsed");

        if (isCollapsed) {
            // Opening sidebar
            openSidebar()
        } else {
            // Closing sidebar (reset to default state)
            closeSidebar();
        }
    });
     // Close sidebar when clicking the close (X) icon
     closeIcon.addEventListener("click", () => {
        if (isCollapsed) {
            // Close sidebar
           closeSidebar()
        }
    });
    // Close sidebar when pressing Esc key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeSidebar();
        }
    });
      // Function to Open Sidebar
      function openSidebar() {
        sidebar.classList.remove("collapsed");
        burgerIcon.style.display = "none"; // Hide burger icon
        closeIcon.style.display = "block"; // Show cancel icon
    }
    // Function to close sidebar and reset everything 
    function closeSidebar() {
        sidebar.classList.add("collapsed");
        burgerIcon.style.display = "block";
        closeIcon.style.display = "none";

        // Close all dropdowns when sidebar is collapsed
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            content.classList.remove("show");
        });

         // Reset dropdown icons
         document.querySelectorAll(".dropdown-icon").forEach((icon) => {
            icon.src = "assets/icons/chevron-down-solid.svg";
        });
    }
    // Dropdown logic
    dropdownButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Close all dropdown except the one clicked 
            document.querySelectorAll(".dropdown-content").forEach((content) => {
                if (content !== btn.nextElementSibling) {
                    content.classList.remove("show");
                }
            });
            
            const dropdownContent = btn.nextElementSibling;
            dropdownContent.classList.toggle("show");

            // Change icon dynamically 
            const icon = btn.querySelector(".dropdown-icon");
            icon.src = dropdownContent.classList.contains("show")
            ? "assets/icons/chevron-up-solid.svg"
            : "assets/icons/chevron-down-solid.svg";
        });
    });
});
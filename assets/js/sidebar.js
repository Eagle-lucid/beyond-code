document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle");
    const burgerIcon = document.getElementById("burger-icon");
    const closeIcon = document.getElementById("close-icon");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Set sidebar to be collapsed by default
    closeSidebar();

    // Sidebar Toggle (Open/Close)
    toggleBtn.addEventListener("click", () => {
        if (sidebar.classList.contains("collapsed")) {
            // Opening sidebar
            openSidebar()
        } else {
            // Closing sidebar (reset to default state)
            closeSidebar();
        }
    });
     // Close sidebar when clicking the close (X) icon
     closeIcon.addEventListener("click", closeSidebar);

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
        updateIcons(false);
    }
    // Function to close sidebar and reset everything 
    function closeSidebar() {
        sidebar.classList.add("collapsed");
        updateIcons(true)

        // Close all dropdowns when sidebar is collapsed
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            content.classList.remove("show");
        });

         // Reset dropdown icons
         document.querySelectorAll(".dropdown-icon").forEach((icon) => {
            icon.src = "assets/icons/chevron-down-solid.svg";
        });
    }

    // Function to Update Sidebar Icons 
    function updateIcons(isCollapsed) {
        if (isCollapsed) {
            burgerIcon.style.display = "block";
            closeIcon.style.display = "none";
        } else {
            burgerIcon.style.display = "none"; 
            closeIcon.style.display = "block"; 
        }
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
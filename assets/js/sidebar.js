document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Sidebar Toggle (Open/Close)
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");

        // Switch Icon Dynamically 
        if (sidebar.classList.contains("collapsed")) {
            toggleBtn.innerHTML = `<img src="assets/icons/bars-solid.svg" alt="Open Sidebar">`;
        } else {
            toggleBtn.innerHTML = `<img src="assets/icons/xmark-solid.svg" alt="Close Sidebar">`;
        }
    });
    // Close sidebar when pressing Esc key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            sidebar.classList.add("collapsed");
            toggleBtn.innerHTML = `<img src="assets/icons/bars-solid.svg" alt="Open Sidebar">`;
        }
    });
    // Dropdown logic
    dropdownButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
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
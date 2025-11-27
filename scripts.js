// DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change icon
    if (document.body.classList.contains("dark")) {
        toggle.innerHTML = `<i class="fas fa-sun"></i>`;
    } else {
        toggle.innerHTML = `<i class="fas fa-moon"></i>`;
    }
});

// NAVBAR ACTIVE LINK AUTO-HIGHLIGHT
let currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggle.innerHTML = document.body.classList.contains("dark")
        ? `<i class="fas fa-sun"></i>`
        : `<i class="fas fa-moon"></i>`;
});

// AUTO HIGHLIGHT NAV ACTIVE LINK
let currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

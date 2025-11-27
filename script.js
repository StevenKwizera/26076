// ----------------- DARK / LIGHT MODE TOGGLE -----------------
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change icon
    if (document.body.classList.contains("dark")) {
        toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});

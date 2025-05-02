const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

menuToggle.addEventListener("click", () => {
    mobileControls.classList.toggle("hidden");
});

const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

function handleResponsiveControls() {
    if (window.innerWidth <= 768) {
        mobileControls.classList.remove("visible");
        mobileControls.classList.add("hidden");
    } else {
        mobileControls.classList.remove("hidden");
        mobileControls.classList.add("visible");
    }
}

handleResponsiveControls();

window.addEventListener("resize", handleResponsiveControls);

menuToggle.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        mobileControls.classList.toggle("hidden");
        mobileControls.classList.toggle("visible");
    }
});

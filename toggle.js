const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

mobileControls.classList.toggle("hidden");
const searchInput = mobileControls.querySelector('input[type="search"]');
if (searchInput && mobileControls.classList.contains("visible")) {
    setTimeout(() => searchInput.focus(), 100);
}

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    mobileControls.classList.toggle("hidden");
    mobileControls.classList.toggle("visible");

    const searchInput = mobileControls.querySelector('input[type="search"]');
    if (searchInput && mobileControls.classList.contains("visible")) {
      setTimeout(() => searchInput.focus(), 100);
    }
  }
});

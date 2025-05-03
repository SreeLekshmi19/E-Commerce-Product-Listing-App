const menuToggle = document.getElementById("menu-toggle");
const mobileControls = document.getElementById("mobile-controls");

function handleResize() {
  if (window.innerWidth > 768) {
    mobileControls.style.display = "flex";
  } else {
    mobileControls.style.display = "none";
  }
}

handleResize();
window.addEventListener("resize", handleResize);

menuToggle.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    const isHidden = mobileControls.style.display === "none" || !mobileControls.style.display;
    mobileControls.style.display = isHidden ? "flex" : "none";

    if (isHidden) {
      const searchInput = mobileControls.querySelector('input[type="search"]');
      if (searchInput) setTimeout(() => searchInput.focus(), 100);
    }
  }
});

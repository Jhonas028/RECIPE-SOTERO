// Select elements
const toggleMenu = document.querySelector(".header__toggle-menu");
const nav = document.querySelector(".header__nav");

// Toggle open class
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  nav.classList.toggle("open");
});

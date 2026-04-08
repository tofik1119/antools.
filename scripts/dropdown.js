const dropdownBtn = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownBtn.addEventListener("click", () => {
   dropdownBtn.classList.toggle("is-active");
   dropdownMenu.classList.toggle("is-open");
});
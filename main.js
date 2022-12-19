const showNavbar = document.querySelector(".navbar__hamburguer");
const showAnchors = document.querySelector(".navbar__lists");

showNavbar.addEventListener("click", () => {
  showAnchors.classList.toggle("nav-active");
});

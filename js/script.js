//to homepage function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//resize logo function
window.addEventListener("scroll", resizeLogo);

function resizeLogo() {
  const logoImg = document.querySelector("#logo img");
  if (window.scrollY >= 100) {
    logoImg.classList.add("small");
  } else {
    logoImg.classList.remove("small");
  }
}

//toggle mobile menu
function toggleMenu() {
  openMenuMoblile();
  changeIcon();
}

// open menu
function openMenuMoblile() {
  const menu = document.getElementById("menu-mobile");
  menu.classList.toggle("translate-y-0");
  menu.classList.toggle("opacity-100");
}

//change icon
function changeIcon() {
  const menuOpen = document.querySelector("#menu-toggle .menu-open");
  const menuClose = document.querySelector("#menu-toggle .menu-close");
  menuOpen.classList.toggle("rotate-90");
  menuOpen.classList.toggle("opacity-0");
  menuClose.classList.toggle("rotate-0");
  menuClose.classList.toggle("opacity-100");
}

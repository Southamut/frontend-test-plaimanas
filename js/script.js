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

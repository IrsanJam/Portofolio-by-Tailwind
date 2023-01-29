//Peintah ketika di scroll munculkan kelas / hapus class navbar-fixed
window.onscroll = function () {
  const head = document.querySelector("header");
  const patokan = head.offsetTop;

  if (patokan < window.pageYOffset) {
    head.classList.add("navbar-fixed");
  } else {
    head.classList.remove("navbar-fixed");
  }
};
//ini bagian hamburger
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbarMenu.classList.toggle("hidden");
});
hamburger - active;
hidden;

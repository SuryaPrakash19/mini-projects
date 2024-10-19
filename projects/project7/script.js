const navs = document.querySelectorAll(".moveLeft");
const menuIcon = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#closeIcon");

menuIcon.addEventListener("click", () => {
  navs.forEach((nav, index) => {
    if (index == 0) {
      nav.style.transitionDelay = "500ms";
    }
    if (index == 1) {
      nav.style.transitionDelay = "300ms";
    }
    if (index == 2) {
      nav.style.transitionDelay = "0ms";
    }
    nav.classList.add("navOpened");
  });
});
closeIcon.addEventListener("click", () => {
  navs.forEach((nav, index) => {
    if (index == 0) {
      nav.style.transitionDelay = "0ms";
    }
    if (index == 1) {
      nav.style.transitionDelay = "300ms";
    }
    if (index == 2) {
      nav.style.transitionDelay = "500ms";
    }
    nav.classList.remove("navOpened");
  });
});

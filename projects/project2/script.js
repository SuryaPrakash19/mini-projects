const navButton = document.querySelector(".navButton");
const content = document.querySelector("#contentSection");
const navLevels = document.querySelectorAll(".navLevel");
navButton.addEventListener("click", () => {
  navButton.classList.toggle("rotate90");
  content.classList.toggle("rotate20");
  navLevels.forEach((l) => l.classList.toggle("translateX"));
});

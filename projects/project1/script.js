const panels = document.getElementsByClassName("panel");

for (let element of panels) {
  element.addEventListener("mouseenter", () => {
    for (let e of panels) {
      e.classList.remove("active");
    }
    element.classList.add("active");
  });
}

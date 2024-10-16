const draggedElement = document.getElementById("pic");
draggedElement.addEventListener("dragstart", (ev) => {
  ev.currentTarget.classList.add("dragging");
});
draggedElement.addEventListener("dragend", (ev) => {
  ev.target.classList.remove("dragging");
});
const boxes = document.querySelectorAll(".box");
boxes.forEach((b) => {
  b.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    b.classList.add("boxborder");
  });
  b.addEventListener("dragleave", () => {
    b.classList.remove("boxborder");
  });
  b.addEventListener("drop", (ev) => {
    ev.preventDefault();
    b.classList.remove("boxborder");
    b.appendChild(draggedElement);
  });
});

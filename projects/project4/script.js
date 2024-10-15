const button = document.querySelector("#button");
let circle;
button.addEventListener("click", (event) => {
  console.log(event.clientX, event.clientY);
  if (circle) button.removeChild(circle);
  circle = document.createElement("div");

  circle.classList.add("circle");

  circle.style.position = "absolute";
  circle.style.top = event.clientY - button.getBoundingClientRect().top + "px";
  circle.style.left =
    event.clientX - button.getBoundingClientRect().left + "px";
  button.appendChild(circle);
});

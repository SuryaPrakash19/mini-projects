const loadingText = document.querySelector(".loadingText");
const backgroundImage = document.querySelector("#backgroundImage");
let x = 10;
let load = 0;

function blurring() {
  load++;
  x = x - 1 / 10;
  console.log(x);
  loadingText.textContent = load + "%";
  backgroundImage.style.filter = "blur(" + x + "px)";
  let y = 10 - x;

  loadingText.style.opacity = 1 - load / 100;
  if (load > 99) {
    clearInterval(int);
  }
  console.log(load);
}

let int = setInterval(blurring, 30);

// function visible() {
//   const message = document.getElementById("man230226_message");
//   message.classList = "visible";
// }

// function notvisible() {
//   const message = document.getElementById("man230226_message");
//   message.classList = "hidden";
// }

const h2: HTMLElement | null = document.getElementById("h2");

h2?.addEventListener("mouseover", function (event: MouseEvent) {
  console.log(event);
  this.style.backgroundColor = "antiquewhite";
});

h2?.addEventListener("mouseout", function (event: MouseEvent) {
  this.style.backgroundColor = "bisque";
});

const btn: HTMLElement | null = document.getElementById("button");
const box: HTMLElement | null = document.getElementById("message");

btn.addEventListener("mouseover", () => {
  box.classList.remove("hidden");
});

btn.addEventListener("mouseleave", () => {
  box.classList.add("hidden");
});

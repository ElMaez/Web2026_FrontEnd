// function visible() {
//   const message = document.getElementById("man230226_message");
//   message.classList = "visible";
// }
// function notvisible() {
//   const message = document.getElementById("man230226_message");
//   message.classList = "hidden";
// }
var h2 = document.getElementById("h2");
h2 === null || h2 === void 0 ? void 0 : h2.addEventListener("mouseover", function (event) {
    console.log(event);
    this.style.backgroundColor = "antiquewhite";
});
h2 === null || h2 === void 0 ? void 0 : h2.addEventListener("mouseout", function (event) {
    this.style.backgroundColor = "bisque";
});
var btn = document.getElementById("button");
var box = document.getElementById("message");
btn.addEventListener("mouseover", function () {
    box.classList.remove("hidden");
});
btn.addEventListener("mouseleave", function () {
    box.classList.add("hidden");
});
//# sourceMappingURL=mandag230226.js.map
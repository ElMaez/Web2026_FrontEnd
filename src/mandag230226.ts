// Øvelse 1
const h2: HTMLElement | null = document.getElementById("h2");

h2?.addEventListener("mouseover", function (event: MouseEvent) {
  console.log(event);
  this.style.backgroundColor = "antiquewhite";
});

h2?.addEventListener("mouseout", function (event: MouseEvent) {
  this.style.backgroundColor = "bisque";
});

// Øvelse 2
const btn: HTMLElement | null = document.getElementById("button");
const box: HTMLElement | null = document.getElementById("message");

btn.addEventListener("mouseover", () => {
  box.classList.remove("hidden");
});

btn.addEventListener("mouseleave", () => {
  box.classList.add("hidden");
});

// Øvelse 3

const assignment3_input: any = document.getElementById("assignment3_input");
const add_btn: HTMLElement | null = document.getElementById("add_btn");

const todoBox: HTMLElement | null = document.getElementById("todoBox");

window.addEventListener("load", () => {
  Object.keys(localStorage).forEach((key) => {
    const new_li: HTMLElement | null = document.createElement("li");
    const value = localStorage.getItem(key);
    todoBox.appendChild(new_li);
    new_li.id = `${key}`;
    new_li.textContent = `${value}`;

    // delete
    new_li.addEventListener("click", (key) => {
      console.log("what?", new_li, "key", key);
      const id = new_li.id;
      new_li.remove();
      localStorage.removeItem(id);
    });
  });
});

add_btn.addEventListener("click", () => {
  //  Når der klikkes så skal der tilføjes en li med et id og inputtets value
  const new_li: HTMLElement | null = document.createElement("li");
  const todoValue = assignment3_input.value;
  const count = localStorage.length + 1;
  new_li.setAttribute("id", "todo" + count);
  new_li.textContent = todoValue;
  localStorage.setItem("todo" + count, todoValue);

  todoBox.prepend(new_li);
  // Tøm inputfielded
  assignment3_input.value = "";
});

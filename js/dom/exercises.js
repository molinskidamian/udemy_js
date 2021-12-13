const list = document.createElement("ul");
document.body.appendChild(list);

for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = i + 1;
    list.appendChild(li);
}

const last = list.querySelector("li:last-child");

last.style.color = "red";
last.textContent = "Jestem ostatnim elementem,";
last.style.backgroundColor = "blue";
last.style.padding = "20px";
last.style.fontSize = "48px";

// exercise 1
// const list = document.createElement("ul");
// document.body.appendChild(list);

// for (let i = 0; i < 10; i++) {
//     const li = document.createElement("li");
//     li.textContent = i + 1;
//     list.appendChild(li);
// }

// const last = list.querySelector("li:last-child");

// last.style.color = "red";
// last.textContent = "Jestem ostatnim elementem,";
// last.style.backgroundColor = "blue";
// last.style.padding = "20px";
// last.style.fontSize = "48px";

// exercise 2
const square = document.querySelector(".square");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const hello = () => {
    console.log("Cześć!");
};

const redBackground = () => {
    square.style.background = "tomato";
};

const blueBackground = () => {
    square.style.background = "royalblue";
};

btn1.addEventListener("dblclick", hello);

btn2.addEventListener("click", () => {
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");

    p1.classList.toggle("show");

    if (p1.classList.contains("show")) {
        p2.classList.remove("show");
    } else {
        p2.classList.add("show");
    }
});

square.addEventListener("mouseover", redBackground);
square.addEventListener("mouseleave", blueBackground);
